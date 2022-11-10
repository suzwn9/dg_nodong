window.addEventListener('scroll',scrollFunction);


let scrollDiv = document.querySelectorAll('.scrollBox');

let trigger = window.innerHeight/2;

function scrollFunction()
{  
    console.log("스크롤 중입니다.");
    
    for(let i = 0; i<scrollDiv.length; i++)
    {
        if(!scrollDiv[i].classList.contains('show'))
        {
            if(window.innerHeight - trigger > scrollDiv[i].getBoundingClientRect().top )
            {
                scrollDiv[i].classList.add('show');
            }
        }
    }
    
}
