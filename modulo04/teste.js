let data = new Date(1585452014195);
console.log(new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(data));