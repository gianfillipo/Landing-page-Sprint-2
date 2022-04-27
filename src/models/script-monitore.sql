-- Criando o database da monitore
create database monitore;
use monitore;

-- Criando o user do banco
create user 'Sptech'@'localhost' identified by 'Monitore123';

-- Dando as permissões
grant select, insert, delete, update on monitore.* to 'Sptech'@'localhost';

-- Criando as tabelas
create table Empresa (
idEmpresa int primary key auto_increment,
Nome varchar (40),
Endereco varchar (60),
cnpj char (14),
numeroEmpresa char (14)
) auto_increment = 1000;

create table Funcionario (
fkEmpresa int, foreign key (fkEmpresa) references Empresa (idEmpresa),
idFuncionario int,
primary key (fkEmpresa, idFuncionario),
nomeFuncionario varchar (45),
email varchar (45),
senha varchar (45)
);

create table Geladeira (
fkEmpresa int, foreign key (fkEmpresa) references Empresa (idEmpresa),
idGeladeira int primary key auto_increment,
Corredor int,
Setor varchar (30)
);

create table Sensor (
fkGeladeira int, foreign key (fkGeladeira) references Geladeira (idGeladeira),
idSensor int primary key auto_increment,
nomeSensor varchar (30),
Descricao varchar (45) 
) auto_increment = 100;

create table Leitura (
fkSensor int, foreign key (fkSensor) references Sensor (idSensor),
idLeitura int,
primary key (fkSensor, idLeitura),
Temperatura decimal (3,1),
Horario datetime
);

create table TipoProduto (
idTipoProduto int primary key auto_increment,
nomeProduto  varchar (45),
tempMaxima decimal (3,1),
tempMinima decimal (3,1)
) auto_increment = 500;

create table ProdutoArmazenado (
fkGeladeira int, foreign key (fkGeladeira) references Geladeira (idGeladeira),
idProduto int primary key auto_increment,
fkTipoProduto int, foreign key (fkTipoProduto) references TipoProduto (idTipoProduto),
Validade date
);
show tables;

select * from Empresa;
select * from Funcionario;
select * from Geladeira;
select * from Sensor;
select * from Leitura;
select * from TipoProduto;
select * from ProdutoArmazenado;















