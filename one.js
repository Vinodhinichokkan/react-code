for (var i = 0; i < 3; i++) {
    setTimeout(()=> console.log(i), 100);
}


for (let i = 0; i < 3; i++) {
    setTimeout(()=> console.log(i), 100);   
}

// output - 3 3 3
// output - 0 1 2