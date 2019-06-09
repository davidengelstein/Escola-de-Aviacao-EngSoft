from flask import request
from flask_restful import Resource
from Model import db, Aluno, AlunoSchema

alunos_schema = AlunoSchema(many=True)
aluno_schema = AlunoSchema()

class AlunoResource(Resource):

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = aluno_schema.load(json_data)
        if json_data['nome'] == '' or json_data['email'] == '' or json_data['endereco'] == '' or json_data['cpf'] == '' or json_data['data_nascimento'] == '':
            return {'message': 'Preencha todos os campos'}, 400
        if errors:
            return errors, 422
        teste = Aluno.query.filter_by(cpf=json_data['cpf']).first()
        if teste:
            return {'message': 'Aluno com essa matricula ja existe'}, 400
        matric = Aluno(
            nome = json_data['nome'],
            email = json_data['email'],
            endereco = json_data['endereco'],
            cpf = json_data['cpf'],
            data_nascimento = json_data['data_nascimento'],
            telefone = json_data['telefone']
            )
        db.session.add(matric)
        db.session.commit()

        result = aluno_schema.dump(matric).data

        return { "status": 'success', 'data': result }, 201

    def get(self):
        cprf = request.args.get('cpf')
        aluno = Aluno.query.filter_by(cpf=cprf).first()
        if not aluno:
            return {'message' : 'Nenhum aluno com este CPF'}
        result = aluno_schema.dump(aluno).data
        return { "status": 'success', 'data': result}, 201

    def delete(self):
        cprf = request.args.get('cpf')
        aluno = Aluno.query.filter_by(cpf=cprf).delete()
        db.session.commit()

        result = aluno_schema.dump(aluno).data

        return { "status": 'success', 'data': result}, 204