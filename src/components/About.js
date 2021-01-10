const About = (show) => {

    console.log(show)
    if(show){
    return(
    <div class="text-center">
        <h1 class="header" id="about">About</h1>
        <p class="container-fluid">
            <div>
           <p>Hi, my name's Hugh. After 5 years working as a police officer, I decided that I wanted to try something different. </p>
        </div>
        <div>
            <p>I am currently studying for a Master's of Software Development at the University of Glasgow after discovering that I liked making computers do things.</p>
        </div>
        <div>
            <p>I code frequently, and enjoy completing challenges on CodeWars, Leetcode and building my own projects. To see what I have been working on recently, please see my GitHub account.</p>
        </div>
            <p>Below, you can see the results of some of my tinkering.</p> 
            </p>
    </div>
    )
    }
    else{return(null)
    }
}

    export default About