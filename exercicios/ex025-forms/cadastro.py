nome = str(input('Digite o seu nome: '))
idade = int(input('Digite a sua idade: '))

if idade < 18:
    print('Você é menor de idade')
else:
    print('Você é maior de idade')

while True:
    if nome.count(5):
        print('Seu nome tem 5 letras')
    else:
        break