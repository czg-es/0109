var lista_col = ['plum','aliceblue','floralwhite','papayawhip','#eedd82','lemonchiffon','lavenderblush','dodgerblue'];
/* let current_c = lista_col[Math.floor(Math.random() * lista_col.length)]; */
var mode = 0;
var btn = document.getElementById('t_m');

btn.textContent ='🌙';
// Changes current value of css root variable --background. 
// accepts a hex value (#ffffff) or css color name. without argument changes value of --background to a random element of lista_col
function change_c(current_c){
    if(current_c !== undefined){
        document.documentElement.style.setProperty('--background', current_c);
        window.name = current_c ; 
        parent.document.title = current_c;
        console.log('entra?');
    }
    else{
        if(!current_c){
            console.log('ENTRÓ');
            var current_c = lista_col[Math.floor(Math.random()*lista_col.length)];
            document.documentElement.style.setProperty('--background', current_c);
            parent.document.title = current_c;
            window.name = current_c ; 
        }
    }
    console.log(current_c);
}

// apply css filter invert to html element
function night(){
    document.documentElement.style.setProperty('filter', 'invert(90%)');
    mode = 1;
    btn.textContent ='☀️';
    btn.style.setProperty('filter', 'invert(90%)');
    parent.window.name = 'night' ;
}
// removes filter to html element
function day(){
    document.documentElement.style.setProperty('filter', '');
    mode = 0;
    btn.textContent ='🌙';
    btn.style.setProperty('filter', '');
    parent.window.name = 'day' ;
}

// UNUSUED ???
function detect(){
    var modo =  window.name ;
    modo == 'day' ? day() : night() ;
    console.log(modo);
    console.log(window.name);
}

// Checks mode value to apply the night or day functions. 
function toggle_mode() {
    if (mode === 0) {
        night();
    } else {
        day();
    }
}    
var old_title = parent.document.title;

//check if window.name (child iframe) is defined, if it is execs change_c(window.name) if not exec change_c() 
if (window.name == '' ){
    change_c();
    console.log('UNDEFINIDO')
    console.log('--->>>>>'+ window.name);
}
else {
    change_c(window.name);
    console.log('DEFINIDO')
}


/* 
☀️

🌙
*/