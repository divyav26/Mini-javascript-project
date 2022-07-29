let data=[
    {
        name:'divya',
        age:22
    },

    {
        name:'yash',
        age:17
    },

    {
        name:'pooja',
        age:21
    },

    {
        name:'annie',
        age:22
    },

    {
        name:'priti',
        age:22
    },

    {
        name:'nishu',
        age:22
    }
]

const info=document.querySelector("#info")

const details=data.map(function(user)
{
    return '<div>' + user.name +'  ' + 'is    ' + user.age+' '+ 'year old '+'</div>' 
})

info.innerHTML=details.join("\n")