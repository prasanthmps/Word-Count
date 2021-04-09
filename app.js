const tex=document.getElementById("floatingTextarea2");
const chars=document.querySelector('#chars');
const words=document.querySelector('#words');
const sents=document.querySelector('#sents');
document.addEventListener('keyup',()=>{
    let char=0;
    let str=tex.value;
    let n=str.length;
    let space=0;
    let dot=0;
    for(i=0;i<str.length;i++)
    {
        console.log(i);
        if(str[i]==' ' && i<n-1)
        {
            space++;
            if(i<n-1)
            {
                while(str[i+1]==' ')
                {
                    i++;
                }
            }
            
        }
        else if(str[i]=='.')
        {
            dot++;
            if(i<n-1)
            {
                while(str[i+1]=='.')
                {
                    i++;
                }
            }
        }
        else{
            char++;
        }
    }
    chars.innerText=char;
    if(char>0)
    {
        words.innerText=space+1;
    }
    else{
        words.innerText=0;
    }

if(dot==0)
{
    if(char>0)
    {
        sents.innerText=1;
    }
    else{
        sents.innerText=0;
    }
    
}
else{
    sents.innerText=dot;
}


})












