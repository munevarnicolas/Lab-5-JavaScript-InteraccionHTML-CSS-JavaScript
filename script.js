let contador = 0;

function sumar() 
{
    contador = contador + 1;
    document.getElementById('numero').textContent = contador;
    
    if (contador >= 10) 
    {
        document.getElementById('numero').style.color = 'green';
    } 
    else 
    {
        document.getElementById('numero').style.color = 'blue';
    }
}

function restar() 
{
    contador = contador - 1;
    document.getElementById('numero').textContent = contador;
    
    if (contador >= 10) 
    {
        document.getElementById('numero').style.color = 'green';
    } 

    else 
    {
        document.getElementById('numero').style.color = 'blue';
    }
}