eval(
  (function (m, c, h) {
    function z(i) {
      return (
        (i < 62 ? "" : z(parseInt(i / 62))) +
        ((i = i % 62) > 35 ? String.fromCharCode(i + 29) : i.toString(36))
      );
    }
    for (var i = 0; i < m.length; i++) h[z(i)] = m[i];
    function d(w) {
      return h[w] ? h[w] : w;
    }
    return c.replace(/\b\w+\b/g, d);
  })(
    "|||jQuery|noConflict|function|window|on|load|status||fadeOut|preloader|delay|200|slow|scroll|if|this|scrollTop|50|return|to|top|fadeIn|else|click|body|html|animate|500|page|bind|event|var|stop||||||attr|href|offset|1500|easeInOutExpo|preventDefault|onload|document|getElementsByClassName|txt|rotate|for|length|getAttribute|data|period|new|TxtRotate|JSON|parse|createElement|style|type|text|css|innerHTML|wrap|border|right|10px|solid|40E0D0|appendChild|toRotate|el|loopNum|parseInt|1000|tick|isDeleting|false|prototype|substring|Math|random|100|true|setTimeout|counter|each|countTo|count|countNum|duration|3000|easing|linear|step|floor|complete|today|Date|year|getFullYear|copyright|getElementById|JonasDias".split(
      "|"
    ),
    '3.4();(5 ($){$(6).7("8",5 (){$("#9").b();$("#c").d(e).b("f");});})(3);3.4();(5 ($){$(6).g(5 (){h($(i).j()>=k){$("#l-m-n").o(e);}p {$("#l-m-n").b(e);}});$("#l-m-n").q(5 (){$("r,s").t({j:0,},u);});})(3);3.4();(5 ($){$(5 (){$("a.v-g").w("q",5 (x){y $B=$(i);$("s, r").z().t({j:$($B.F("G")).H().n,},I,"J");x.K();});});})(3);6.L=5 (){y A=M.N("O-P");Q(y B=0;B<A.R;B++){y C=A[B].S("T-P");y D=A[B].S("T-U");h(C){V W(A[B],X.Y(C),D);}}y E=M.Z("10");E.11="12/13";E.14=".O-P > .15 { 16-17: 18 19 #1a }";M.r.1b(E);};y W=5 (A,B,C){i.1c=B;i.1d=A;i.1e=0;i.U=1f(C,1)||1g;i.O="";i.1h();i.1i=1j;};W.1k.1h=5 (){y A=i.1e%i.1c.R;y B=i.1c[A];h(i.1i){i.O=B.1l(0,i.O.R-1);}p {i.O=B.1l(0,i.O.R+1);}i.1d.14=""+i.O+"";y C=i;y D=e-1m.1n()*1o;h(i.1i){D/=2;}h(!i.1i&&i.O===B){D=i.U;i.1i=1p;}p h(i.1i&&i.O===""){i.1i=1j;i.1e++;D=e;}1q(5 (){C.1h();},D);};3.4();(5 ($){$(".1r").1s(5 (){y $B=$(B),1t=$B.F("T-1u");$({1v:$B.12(),}).t({1v:1t,},{1w:1x,1y:"1z",1A:5 (){$B.12(1m.1B(B.1v));},1C:5 (){$B.12(B.1v);},});});})(3);y 1D=V 1E();y 1F=1D.1G();y 1H=M.1I("1H");1H.14=`©1J${1F}`;',
    {}
  )
);
