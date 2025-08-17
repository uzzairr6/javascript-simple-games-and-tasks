/*
function vowels(str)
{ 
    count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u")
        {
            count++
        }
        
    }

    console.log(count)
}
vowels("aaabc")*/

/*function vowel(str)
{
    count=0
    for(const val of str)
    {
          if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
        {
            count++
        }
    }
    console.log(count)
}
vowel("aabbc")*/

const vowels=(str)=>
{
     count=0
    for(const val of str)
    {
          if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
        {
            count++
        }
    }
    console.log(count)
}
vowels("bcdaeic")

