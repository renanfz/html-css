""" nome = str(input('Digite o seu nome: '))
idade = int(input('Digite a sua idade: '))

if idade < 18:
    print('Você é menor de idade')
else:
    print('Você é maior de idade')

while True:
    if nome.count(5):
        print('Seu nome tem 5 letras')
    else:
        break """

print('--- Formulario de Cadastro ---')

print('Insira abaixo seu nome e data de nascimento')
nome = str(input('Nome ')).title
nasc = int(input('Data de nascimento '))
matricula = int(input('Matrícula '))