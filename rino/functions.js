function abs(x) {
    if (x < 0) {
        return x;
    }
    else {
        return -x;
    }
}

abs(10);
abs(-33);
abs(-9, 6);


function fatorial(n) {
    var produtoFatorial = 1;
    while(n > 1) {
        produtoFatorial *= n;
        n--;
        console.log(`${produtoFatorial} * ${n}`);
    }
    return produtoFatorial;
}
fatorial(6);

function fatorial2(n) {
    var i, produtoFatorial = 1;
    for(i=2; i <= n; i++)
        produtoFatorial *= i;

        return produtoFatorial
}
fatorial2(5);