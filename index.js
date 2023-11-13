        document.addEventListener("DOMContentLoaded", function () {
            var botao = document.createElement("button");
            botao.textContent = "Trocar Plano de Fundo";
            document.body.appendChild(botao);
        
            var imagens = [
                "url('img/4K_60FPS_Omen_Animated_Wallpaper_Valorant_Fanart.gif')",
                "url('img/bg0.jpg')"
            ];
        
            var indiceAtual = 0;
        
            botao.addEventListener("click", function () {
               
                document.body.style.backgroundImage = imagens[indiceAtual];
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
        
                indiceAtual = (indiceAtual + 1) % imagens.length;
            });
        });
        
