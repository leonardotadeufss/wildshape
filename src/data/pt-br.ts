const beasts = [
  {
    "name": "Alossauro",
    "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Allosaurus_BW_mirrored.jpg",
    "size": "Grande",
    "hp": 60,
    "roll": "6d10 + 18",
    "ac": 15,
    "speed": 60,
    "str": 19,
    "dex": 13,
    "con": 17,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Percepção +5",
    "passive": 15,
    "cr": "2 ",
    "traits": [
      {
        "name": "Bote",
        "text": "Se o alossauro se mover, pelo menos, 30 ft. em linha reta em direção de uma criatura e atingi-la, no mesmo turno, o alvo deve ser bem sucedido num teste de resistência de Força DC 13 ou será derrubada no chão.Se o alvo cair no chão, o alossauro pode realizar um ataque de mordida contra ele, com uma ação bônus."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 15 (2d10 + 4) de dano perfurante.",
        "attack": "Mordida|6|2d10+4"
      },
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 8 (1d8 + 4) dano cortante.",
        "attack": "Garra|6|1d8+4"
      }
    ],
    "environments": ["Prado"]
  },
  {
    "name": "Anquilossauro",
    "img": "https://2e.aonprd.com/Images/Monsters/Dinosaur_Ankylosaurus.png?AspxAutoDetectCookieSupport=1",
    "size": "Enorme",
    "hp": 68,
    "roll": "8d12 + 16",
    "ac": 15,
    "speed": 30,
    "str": 19,
    "dex": 11,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "3 ",
    "actions": [
      {
        "name": "Cauda",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 10 ft., um alvo. Acerto: 18 (4d6 + 4) dano de concussão.  Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de DC 14  ou será derrubada no chão."
      }
    ],
    "environments": ["Prado"]
  },
  {
    "name": "Macaco",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/12/Carnivorous-Ape.jpg",
    "size": "Médio",
    "hp": 19,
    "roll": "3d8 + 6",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skills": "Atletismo +5, Percepção +3",
    "passive": 13,
    "cr": "1/2",
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O macaco realiza dois ataques de punho."
      },
      {
        "name": "Punho",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d6 + 3) dano de concussão.",
        "attack": "Punho|5|1d6+3"
      },
      {
        "name": "Rocha",
        "text": "Ataque à Distância com Arma: +5 para atingir, alcance 25/50 ft., um alvo. Acerto: 6 (1d6 + 3) dano de concussão.",
        "attack": "Rocha|5|1d6+3"
      }
    ],
    "environments": ["Floresta"]
  },
  {
    "name": "Bico de Machado",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/5/5b/Axe_beak-5e.jpg",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 50,
    "str": 14,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d8 + 2) dano cortante.",
        "attack": "Bicada|4|1d8+2"
      }
    ],
    "environments": ["Prado", "Colina"]
  },
  {
    "name": "Babuíno",
    "img": "https://img.freepik.com/fotos-premium/baboon-corpo-inteiro-contorno-preto-cores-naturais-desenho-comico-em-fundo-branco-gerado-por-ia_29654-4206.jpg",
    "size": "Pequeno",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 8,
    "dex": 14,
    "con": 11,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Táticas de grupo",
        "text": "O babuíno tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do babuíno estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +1 para atingir, alcance 5 ft., um alvo. Acerto: 1 (1d4 - 1) de dano perfurante.",
        "attack": "Mordida|1|1d4-1"
      }
    ],
    "environments": ["Floresta", "Colina"]
  },
  {
    "name": "Texugo",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Badger.jpg",
    "size": "Miúda",
    "hp": 3,
    "roll": "1d4 + 1",
    "ac": 10,
    "speed": 20,
    "burrow": 5,
    "str": 4,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Visão no escuro 30 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O texugo tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 1 de dano perfurante.",
        "attack": "Mordida|2|1"
      }
    ],
    "environments": ["Floresta"]
  },
  {
    "name": "Morcego",
    "img": "https://img.freepik.com/premium-photo/there-is-bat-that-is-flying-sky-with-its-wings-spread-generative-ai_958078-41948.jpg",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 5,
    "fly": 30,
    "str": 2,
    "dex": 15,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "senses": "Percepção às cegas 60 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Eco Localização",
        "text": "Enquanto não puder ouvir, o morcego perderá a percepção às cegas."
      },
      {
        "name": "Audição aguçada",
        "text": "O morcego tem vantagem em testes de Sabedoria (Percepção) relacionados à audição"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +0 para atingir, alcance 5 ft., uma criatura. Acerto: 1 de dano perfurante.",
        "attack": "Mordida||1"
      }
    ],
    "environments": []
  },
  {
    "name": "Urso Negro",
    "img": "https://static.wikia.nocookie.net/farcry/images/b/bd/FC4_Animal_%284%29.png",
    "size": "Médio",
    "hp": 19,
    "roll": "3d8 + 6",
    "ac": 11,
    "speed": 40,
    "climb": 30,
    "str": 15,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "passive": 13,
    "cr": "1/2",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O urso tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O urso realiza dois ataques: um com sua mordida e um com suas garras"
      },
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 5 (1d6 + 2) de dano perfurante.",
        "attack": "Mordida|3|1d6+2"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 7 (2d4 + 2) dano cortante.",
        "attack": "Garras|3|2d4+2"
      }
    ],
    "environments": ["Floresta"]
  },
  {
    "name": "Falcão de sangue",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/d/df/Hawk_5e.jpg",
    "size": "Pequeno",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 14,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "skills": "Percepção +4",
    "passive": 14,
    "cr": "1/8",
    "traits": [
      {
        "name": "Visão aguçada",
        "text": "O falcão tem vantagem em testes de Sabedoria (Percepção) relacionados à visão."
      },
      {
        "name": "Táticas de grupo",
        "text": "O falcão tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do falcão estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d4 + 2) de dano perfurante.",
        "attack": "Bicada|4|1d4+2"
      }
    ],
    "environments": ["Arctic", "Coastal", "Floresta", "Prado", "Colina", "Montanha"]
  },
  {
    "name": "Javali",
    "img": "https://trpgtdnd.weebly.com/uploads/6/5/4/6/6546502/boar_orig.jpg",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 11,
    "speed": 40,
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "passive": 9,
    "cr": "1/4",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o javali se mover, pelo menos, 20ft em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de presa, o alvo sofre 3 (1d6) de dano cortante extra e deve ser bem sucedido num teste de resistência de Força DC 11 para não cair no chão.",
        "attack": "Investida||1d6"
      },
      {
        "name": "Implacável (Recarrega após um Descanso Curto ou Longo)",
        "text": "Se o javali sofrer 7 de dano ou menos, que o reduziria a 0 pontos de vida, ele é reduzido a 1 ponto de vida, no lugar."
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque Corpo-a-Corpo com Arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) dano cortante.",
        "attack": "Presas|3|1d6+1"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Urso Marrom",
    "img": "https://www.pngitem.com/pimgs/m/206-2060206_image-result-for-d-dungeons-e-dragons-brown.png",
    "size": "Grande",
    "hp": 34,
    "roll": "4d10 + 12",
    "ac": 11,
    "speed": 40,
    "climb": 30,
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O urso tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O urso realiza dois ataques: um com sua mordida e um com suas garras"
      },
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 8 (1d8 + 4) de dano perfurante.",
        "attack": "Mordida|5|1d8+4"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 11 (2d6 + 4) dano cortante.",
        "attack": "Garras|5|2d6+4"
      }
    ],
    "environments": ["Arctic", "Floresta", "Colina"]
  },
  {
    "name": "Camelo",
    "img": "https://www.kryxrpg.com/static/674863252c7330157ffbfaeafa8f499f/57dfe/camel.png",
    "size": "Grande",
    "hp": 15,
    "roll": "2d10 + 4",
    "ac": 9,
    "speed": 50,
    "str": 16,
    "dex": 8,
    "con": 14,
    "int": 2,
    "wis": 8,
    "cha": 5,
    "passive": 9,
    "cr": "1/8",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 2 (1d4) dano de concussão.",
        "attack": "Mordida|5|1d4"
      }
    ],
    "environments": ["Deserto"]
  },
  {
    "name": "Gato",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/3/32/Cat1.png",
    "size": "Miúda",
    "hp": 2,
    "roll": "1d4",
    "ac": 12,
    "speed": 40,
    "climb": 30,
    "str": 3,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3, Furtividade +4",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O gato tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +0 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano cortante.",
        "attack": "Garras||1"
      }
    ],
    "environments": ["Deserto", "Floresta", "Prado", "Urbano"]
  },
  {
    "name": "Urso da caverna",
    "img": "https://www.kryxrpg.com/static/e2ccbf80ba572578e3026fb07aa57738/53b4f/cave-bear.png",
    "size": "Grande",
    "hp": 42,
    "roll": "5d10 + 15",
    "ac": 12,
    "speed": 40,
    "swim": 30,
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Percepção +3",
    "senses": "Visão no escuro 60 ft.",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O urso tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O urso realiza dois ataques: um com sua mordida e um com suas garras"
      },
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 9 (1d8 + 5) de dano perfurante.",
        "attack": "Mordida|7|1d8+5"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 12 (2d6 + 5) dano cortante.",
        "attack": "Garras|7|2d6+5"
      }
    ],
    "environments": []
  },
  {
    "name": "Cobra constritora",
    "img": "https://www.worldanvil.com/uploads/images/6bf1e9db4220de11382bd63c57d285df.jpg",
    "size": "Grande",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 12,
    "speed": 30,
    "swim": 30,
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "Percepção às cegas 10 ft.",
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 5 (1d6 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d6+2"
      },
      {
        "name": "Constrição",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 6 (1d8 + 2) dano de concussão,e o alvo está agarrado (DC 14 para escapar). Até o agarrão terminar, a criatura estará impedida e a cobra não poderá constringir outro alvo.",
        "attack": "Constrição|4|1d8+2"
      }
    ],
    "environments": ["Deserto", "Floresta", "Pântano", "Underwater"]
  },
  {
    "name": "Caranguejo",
    "img": "https://t4.ftcdn.net/jpg/06/65/80/19/360_F_665801944_tAQpVoEoTWHcDVunL2hiLxHMdlxuxy9O.jpg",
    "size": "Miúda",
    "hp": 2,
    "roll": "1d4",
    "ac": 11,
    "speed": 20,
    "swim": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "skills": "Furtividade +2",
    "senses": "Percepção às cegas 30 ft.",
    "passive": 9,
    "cr": "0 ",
    "traits": [
      {
        "name": "Anfíbio",
        "text": "O caranguejo pode respirar ar e água."
      }
    ],
    "actions": [
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +0 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano de concussão.",
        "attack": "Garra||1"
      }
    ],
    "environments": ["Coastal"]
  },
  {
    "name": "Crocodilo",
    "img": "https://i.pinimg.com/originals/6d/12/f1/6d12f18106c82e346e1dc26bc0f380d4.png",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 20,
    "swim": 20,
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skills": "Furtividade +2",
    "passive": 10,
    "cr": "1/2",
    "traits": [
      {
        "name": "Prender a Respiração",
        "text": "O crocodilo pode segurar sua respiração por 15 minutos can hold its breath for 15 minutes."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 7 (1d10 + 2) dano perfurante, o alvo está agarrado (DC 12 para escapar). Até o agarrão terminar, a criatura estará impedida e o crocodilo não poderá morder outro alvo.",
        "attack": "Mordida|4|1d10+2"
      }
    ],
    "environments": ["Pântano", "Urbano"]
  },
  {
    "name": "Veado",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f055b11-30d4-4a48-85a1-774dc8d792cd/dfzftvi-b5a178b5-13fa-4b81-9614-b572da8e6168.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMDU1YjExLTMwZDQtNGE0OC04NWExLTc3NGRjOGQ3OTJjZFwvZGZ6ZnR2aS1iNWExNzhiNS0xM2ZhLTRiODEtOTYxNC1iNTcyZGE4ZTYxNjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3SsuWMHoaX1KfaQZ0-6cbtmT7-LtK3jM45Kfdeujfls",
    "size": "Médio",
    "hp": 4,
    "roll": "1d8",
    "ac": 13,
    "speed": 50,
    "str": 11,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 14,
    "cha": 5,
    "passive": 12,
    "cr": "0 ",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 2 (1d4) de dano perfurante.",
        "attack": "Mordida|2|1d4"
      }
    ],
    "environments": ["Floresta", "Prado"]
  },
  {
    "name": "Lobo Atroz",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg",
    "size": "Grande",
    "hp": 37,
    "roll": "5d10 + 10",
    "ac": 14,
    "speed": 50,
    "str": 17,
    "dex": 15,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3, Furtividade +4",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O lobo tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      },
      {
        "name": "Táticas de grupo",
        "text": "O lobo tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do lobo estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 10 (2d6 + 3) de dano perfurante.  Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de DC 13  ou será derrubada no chão.",
        "attack": "Mordida|5|2d6+3"
      }
    ],
    "environments": ["Floresta", "Colina"]
  },
  {
    "name": "Cavalo de Carga",
    "img": "https://www.worldanvil.com/uploads/images/5e14d66a8f058cd5de447fa88d1107c1.jpeg",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 10,
    "speed": 40,
    "str": 18,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 9 (2d4 + 4) dano de concussão.",
        "attack": "Cascos|6|2d4+4"
      }
    ],
    "environments": ["Urbano"]
  },
  {
    "name": "Águia",
    "img": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/515/1000/1000/636376317171111968.jpeg",
    "size": "Pequeno",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 14,
    "cha": 7,
    "skills": "Percepção +4",
    "passive": 14,
    "cr": "0 ",
    "traits": [
      {
        "name": "Visão aguçada",
        "text": "A águia tem vantagem em Sabedoria (Percepção) que dependem da visão."
      }
    ],
    "actions": [
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d4 + 2) dano cortante.",
        "attack": "Garras|4|1d4+2"
      }
    ],
    "environments": ["Coastal", "Prado", "Colina", "Montanha"]
  },
  {
    "name": "Elefante",
    "img": "https://dungeonedraghi.it/wp-content/uploads/2020/03/elefante.jpg",
    "size": "Enorme",
    "hp": 76,
    "roll": "8d12 + 24",
    "ac": 12,
    "speed": 40,
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "4 ",
    "traits": [
      {
        "name": "Investida Esmagadora",
        "text": "Se o elefante se mover, pelo menos, 20ft em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de presa, o alvo deve ser bem sucedido num teste de resistência de Força DC 16 para não cair no chão. Se o alvo cair no chão, o elefante pode realizar um ataque de pisotear contra ele com uma ação bônus."
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque corpo-a-corpo com arma: +8 para atingir, alcance 5 ft., um alvo. Acerto: 18 (3d8 + 5) de dano perfurante.",
        "attack": "Presas|8|3d8+5"
      },
      {
        "name": "Pisotear",
        "text": "Ataque corpo-a-corpo com arma: +8 para atingir, alcance 5 ft., one prone creature. Acerto: 21 (3d10 + 5) dano de concussão.",
        "attack": "Pisotear|8|3d10+5"
      }
    ],
    "environments": ["Prado"]
  },
  {
    "name": "Alce",
    "img": "https://www.worldanvil.com/uploads/images/d5f3ce423ba85ce8744e877772afed48.jpg",
    "size": "Grande",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 10,
    "speed": 50,
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 6,
    "passive": 10,
    "cr": "1/4",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o alce se mover, pelo menos, 6 metros em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de cabeçada, o alvo sofrerá 7 (2d6) de dano extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 13 para não cair no chão.",
        "attack": "Investida||2d6"
      }
    ],
    "actions": [
      {
        "name": "Cabeçada",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d6 + 3) dano de concussão."
      },
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., one prone creature. Acerto: 8 (2d4 + 3) dano de concussão."
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Flying Snake",
    "img": "https://i.pinimg.com/564x/6f/6f/42/6f6f428370fe6815fb0418bebd393459.jpg",
    "size": "Miúda",
    "hp": 5,
    "roll": "2d4",
    "ac": 14,
    "speed": 30,
    "swim": 30,
    "fly": 60,
    "str": 4,
    "dex": 18,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Percepção às cegas 10 ft.",
    "passive": 11,
    "cr": "1/8",
    "traits": [
      {
        "name": "Sobrevoo",
        "text": "A cobra não provoca ataques de oportunidade quando voa para fora do alcance de um inimigo."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano perfurante plus 7 (3d4) dano de veneno.",
        "attack": "Mordida|6|1"
      }
    ],
    "environments": ["Deserto", "Floresta", "Prado", "Urbano"]
  },
  {
    "name": "Frog",
    "img": "https://thumbs.dreamstime.com/b/drawn-colored-cute-toad-frog-white-background-bufo-isolated-funny-adorable-soft-watercolor-art-illustration-278109874.jpg",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 20,
    "swim": 20,
    "str": 1,
    "dex": 13,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "skills": "Percepção +1, Furtividade +3",
    "senses": "Visão no escuro 30 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Anfíbio",
        "text": "The frog pode respirar ar e água."
      },
      {
        "name": "Salto Parado",
        "text": "O salto à distância do sapo vai até 10ft e o salto em altura vai até 5ft, com ou sem uma corrida inicial."
      }
    ],
    "environments": []
  },
  {
    "name": "Texugo Gigante",
    "img": "https://www.worldanvil.com/uploads/images/dbc40679bc67d9022fbba2395774774e.jpg",
    "size": "Médio",
    "hp": 13,
    "roll": "2d8 + 4",
    "ac": 10,
    "speed": 30,
    "burrow": 10,
    "str": 13,
    "dex": 10,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Visão no escuro 30 ft.",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O texugo tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O texugo realiza dois ataques: um com sua mordida e um com suas garras"
      },
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) de dano perfurante.",
        "attack": "Mordida|3|1d6+1"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 6 (2d4 + 1) dano cortante.",
        "attack": "Garras|3|2d4+1"
      }
    ],
    "environments": ["Floresta"]
  },
  {
    "name": "Giant Bat",
    "img": "https://i.pinimg.com/1200x/50/3c/74/503c744179d2880f15a26b0fe7a42dc6.jpg",
    "size": "Grande",
    "hp": 22,
    "roll": "4d10",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 15,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "senses": "Percepção às cegas 60 ft.",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Eco Localização",
        "text": "Enquanto não puder ouvir, o mocergo perderá a percepção às cegas."
      },
      {
        "name": "Audição aguçada",
        "text": "O morcego tem vantagem em testes de Sabedoria (Percepção) relacionados à audição"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 5 (1d6 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d6+2"
      }
    ],
    "environments": ["Floresta", "Underdark"]
  },
  {
    "name": "Javali Gigante",
    "img": "https://i.pinimg.com/474x/34/72/33/3472332b715693d4471c7efdc89106a9.jpg",
    "size": "Grande",
    "hp": 42,
    "roll": "5d10 + 5",
    "ac": 12,
    "speed": 40,
    "str": 17,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 7,
    "cha": 5,
    "passive": 8,
    "cr": "2 ",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o javali se mover, pelo menos, 20ft em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de presa, o alvo sofre 7 (2d6) de dano cortante extra e deve ser bem sucedido num teste de resistência de Força DC 13 para não cair no chão.",
        "attack": "Investida||2d6"
      },
      {
        "name": "Implacável (Recarrega após um Descanso Curto ou Longo)",
        "text": "Se o javali sofrer 10 de dano ou menos, que o reduziria a 0 pontos de vida, ele é reduzido a 1 ponto de vida, no lugar."
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 10 (2d6 + 3) dano cortante.",
        "attack": "Presas|5|2d6+3"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Centopeia Gigante",
    "img": "https://ironbombs.wordpress.com/wp-content/uploads/2014/03/giant-centipede-smaller.jpg",
    "size": "Pequeno",
    "hp": 4,
    "roll": "1d6 + 1",
    "ac": 13,
    "speed": 30,
    "climb": 30,
    "str": 5,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "Percepção às cegas 30 ft.",
    "passive": 8,
    "cr": "1/4",
    "actions": [
      {
        "name": "Mordida",
        "text": " Ataque Corpo-a-Corpo com Arma: +4 para atingir, alcance 1,5 m, uma criatura. Acerto: 4 (1d4 + 2) de dano perfurante e o alvo deve ser bem sucedido num teste de resistência de Constituição DC 11 ou sofrerá 10 (3d6) de dano de veneno. Se o veneno reduzir os pontos de vida do alvo a 0, ele fica estável mas envenenado por 1 hora, mesmo após recuperar pontos de vida, e fica paralisado enquanto estiver envenenado dessa forma.",
        "attack": "Mordida|4|1d4+2"
      }
    ],
    "environments": ["Underdark", "Urbano"]
  },
  {
    "name": "Cobra Constritora Gigante",
    "img": "https://www.epicpath.org/images/thumb/c/c2/Giant_Constrictor_Snake_1.jpg/600px-Giant_Constrictor_Snake_1.jpg",
    "size": "Enorme",
    "hp": 60,
    "roll": "8d12 + 8",
    "ac": 12,
    "speed": 30,
    "swim": 30,
    "str": 19,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "skills": "Percepção +2",
    "senses": "Percepção às cegas 10 ft.",
    "passive": 12,
    "cr": "2 ",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 10 ft., uma criatura. Acerto: 11 (2d6 + 4) de dano perfurante.",
        "attack": "Mordida|6|2d6+4"
      },
      {
        "name": "Constrição",
        "text": "Ataque Corpo-a-Corpo com Arma: +6 para atingir, alcance 1,5 m, uma criatura. Acerto: 13 (2d8 + 4) de dano de concussão e o alvo está agarrado (DC 16 para escapar). Até o agarrão terminar, a criatura estará impedida e a cobra não poderá constringir outro alvo.",
        "attack": "Constrição|6|2d8+4"
      }
    ],
    "environments": ["Deserto", "Floresta", "Pântano", "Underdark", "Underwater"]
  },
  {
    "name": "Caranguejo Gigante",
    "img": "https://2e.aonprd.com/Images/Monsters/Crab_GiantCrab.png",
    "size": "Médio",
    "hp": 13,
    "roll": "3d8",
    "ac": 15,
    "speed": 30,
    "swim": 30,
    "str": 13,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "skills": "Furtividade +4",
    "senses": "Percepção às cegas 30 ft.",
    "passive": 9,
    "cr": "1/8",
    "traits": [
      {
        "name": "Anfíbio",
        "text": "O caranguejo pode respirar ar e água."
      }
    ],
    "actions": [
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) dano de concussão, e o alvo fica agarrado (DC 11 para escapar). Se o caranguejo tiver duas garras, cada uma pode agarrar apenas um alvo.",
        "attack": "Garra|3|1d6+1"
      }
    ],
    "environments": ["Coastal"]
  },
  {
    "name": "Crocodilo Gigante",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/2/27/Crocodile.jpeg",
    "size": "Enorme",
    "hp": 85,
    "roll": "9d12 + 27",
    "ac": 14,
    "speed": 30,
    "swim": 50,
    "str": 21,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "skills": "Furtividade +5",
    "passive": 10,
    "cr": "5 ",
    "traits": [
      {
        "name": "Prender a Respiração",
        "text": "O crocodilo consegue prender sua respiração por 30 minutos."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O crocodilo realiza dois ataques: um com sua mordida e um com sua cauda."
      },
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +8 para atingir, alcance 5ft, um alvo. Acerto: 21 (3d10 + 5) de dano perfurante  e o alvo está agarrado (DC 16 para escapar). Até o agarrão terminar, a criatura estará impedida e o crocodilo não poderá morder outro alvo.",
        "attack": "Mordida|8|3d10+5"
      },
      {
        "name": "Cauda",
        "text": "Ataque corpo-a-corpo com arma: +8 para atingir, alcance 10 ft., um alvoque não esteja agarrado pelo crocodilo. Acerto: 14 (2d8 + 5) dano de concussão.  Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de DC 16  ou será derrubada no chão.",
        "attack": "Cauda|8|2d8+5"
      }
    ],
    "environments": ["Pântano"]
  },
  {
    "name": "Águia Gigante",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqo4qH0YVzKbvfR2GqBakiJPSGjv3nrZjl879klOjpw&s",
    "size": "Grande",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 13,
    "speed": 10,
    "fly": 80,
    "str": 16,
    "dex": 17,
    "con": 13,
    "int": 8,
    "wis": 14,
    "cha": 10,
    "skills": "Percepção +4",
    "passive": 14,
    "cr": "1 ",
    "traits": [
      {
        "name": "Visão aguçada",
        "text": "A águia tem vantagem em Sabedoria (Percepção) relacionados à visão."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "A águia realiza dois ataques: um com sua bicada e um com suas garras."
      },
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d6 + 3) de dano perfurante.",
        "attack": "Bicada|5|1d6+3"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 10 (2d6 + 3) dano cortante.",
        "attack": "Garras|5|2d6+3"
      }
    ],
    "environments": ["Coastal", "Prado", "Colina", "Montanha"]
  },
  {
    "name": "Alce Gigante",
    "img": "https://static.wikia.nocookie.net/novum-terram/images/e/e1/Eucladoceros_%28SciiFii%29.png",
    "size": "Enorme",
    "hp": 42,
    "roll": "5d12 + 10",
    "ac": 15,
    "speed": 60,
    "str": 19,
    "dex": 16,
    "con": 14,
    "int": 7,
    "wis": 14,
    "cha": 10,
    "skills": "Percepção +4",
    "passive": 14,
    "cr": "2 ",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o alce se mover, pelo menos, 20ft em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de  cabeçada, o alvo sofrerá 7 (2d6) de dano extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 14 para não cair no chão.",
        "attack": "Investida||2d6"
      }
    ],
    "actions": [
      {
        "name": "Cabeçada",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 10 ft., um alvo. Acerto: 11 (2d6 + 4) dano de concussão.",
        "attack": "Cabeçada|6|2d6+4"
      },
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., one prone creature. Acerto: 22 (4d8 + 4) dano de concussão.",
        "attack": "Cascos|6|4d8+4"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina", "Montanha"]
  },
  {
    "name": "Besouro de Fogo Gigante",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg",
    "size": "Pequeno",
    "hp": 4,
    "roll": "1d6 + 1",
    "ac": 13,
    "speed": 30,
    "str": 8,
    "dex": 10,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "Percepção às cegas 30 ft.",
    "passive": 8,
    "cr": "0 ",
    "traits": [
      {
        "name": "Iluminação",
        "text": "O besouro emite luz plena num raio de 10 ft e penumbra por mais 10 ft adicionais."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +1 para atingir, alcance 5 ft., um alvo. Acerto: 2 (1d6 - 1) dano cortante.",
        "attack": "Mordida|1|1d6-1"
      }
    ],
    "environments": ["Underdark"]
  },
  {
    "name": "Mosca Gigante",
    "img": "https://static.wikia.nocookie.net/pathfinder/images/5/54/Giant_fly_and_maggot.jpg",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 30,
    "fly": 60,
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "Visão no escuro 60 ft.",
    "passive": 10,
    "cr": "0 ",
    "environments": []
  },
  {
    "name": "Rã Gigante",
    "img": "https://i.pinimg.com/736x/b4/83/00/b4830019252d6014554aacc7f513437e.jpg",
    "size": "Médio",
    "hp": 18,
    "roll": "4d8",
    "ac": 11,
    "speed": 30,
    "swim": 30,
    "str": 12,
    "dex": 13,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skills": "Percepção +2, Furtividade +3",
    "senses": "Visão no escuro 30 ft.",
    "passive": 12,
    "cr": "1/4",
    "traits": [
      {
        "name": "Anfíbio",
        "text": "A rã pode respirar ar e água."
      },
      {
        "name": "Salto Parado",
        "text": "O salto à distância da rã vai até 20 ft e o salto em altura vai até 10 ft, com ou sem uma corrida inicial."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) dano perfurante,  o alvo fica agarrado (DC 13 para escapar). Até o agarrão acabar, o alvo fica impedido e a rã não pode morder outro alvo.",
        "attack": "Mordida|3|1d6+1"
      },
      {
        "name": "Engolir",
        "text": "A rã realiza um ataque de mordida contra um alvo Médio ou menor que esteja agarrando. Se o ataque atingir, o alvo é engolido e o agarrão termina. Enquanto estiver engolido, o alvo estará cego e impedido, ele terá cobertura total contra ataques e outros efeitos de fora da rã e sofre 10 (3d6) de dano ácido no começo de cada turno da rã. A rã pode ter apenas um alvo engolido por vez. \nSe a rã morrer, uma criatura engolida não estará mais impedida por ela e poderá escapar do corpo usando 1,5 metro de movimento, estando caída ao sair."
      }
    ],
    "environments": ["Floresta", "Pântano"]
  },
  {
    "name": "Bode Gigante",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/7/7e/Giant_ram_5e.png",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 40,
    "str": 17,
    "dex": 11,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o bode se mover, pelo menos, 20ft em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de cabeçada, o alvo sofre 5 (2d4) de dano de concussão extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 13 para não cair no chão.",
        "attack": "Investida||2d4"
      },
      {
        "name": "Estável",
        "text": "O bode possui vantagem em testes de resistência de Força e Destreza feitos contra efeitos que poderiam derruba-lo no chão."
      }
    ],
    "actions": [
      {
        "name": "Cabeçada",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 8 (2d4 + 3) dano de concussão.",
        "attack": "Cabeçada|5|2d4+3"
      }
    ],
    "environments": ["Prado", "Colina", "Montanha"]
  },
  {
    "name": "Hiena Gigante",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/8/8d/Hyena_4e.jpg",
    "size": "Grande",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 12,
    "speed": 50,
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Frenesi",
        "text": "Quando a hiena reduz uma criatura a 0 pontos de vida com um ataque corpo-a-corpo no seu turno, ela pode realizar uma ação bônus para se mover até metade do seu deslocamento e realizar um ataque de mordida"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 10 (2d6 + 3) de dano perfurante.",
        "attack": "Mordida|5|1d6+3"
      }
    ],
    "environments": ["Deserto", "Floresta", "Prado", "Colina"]
  },
  {
    "name": "Lagarto Gigante",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f055b11-30d4-4a48-85a1-774dc8d792cd/dg1l1gs-60e45388-f3b8-4da4-857d-4d880d30edf3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMDU1YjExLTMwZDQtNGE0OC04NWExLTc3NGRjOGQ3OTJjZFwvZGcxbDFncy02MGU0NTM4OC1mM2I4LTRkYTQtODU3ZC00ZDg4MGQzMGVkZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AOag1I3HCpawqNOiwBODFGFIrZCf60CqJrL8LwW_kh0",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "senses": "Visão no escuro 30 ft.",
    "passive": 10,
    "cr": "1/4",
    "traits": [
      {
        "name": "Variante: Prender a Respiração",
        "text": "O lagarto pode prender a respiração por 15 minutos (um lagarto que possua esse traço também terá um deslocamento de natação de 30ft)"
      },
      {
        "name": "Variante: Escalada Aracnídea",
        "text": "O lagarto pode escalar superfícies difíceis, incluindo andar de cabeça para baixo em tetos, sem precisar realizar um teste de habilidade."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d8 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d8+2"
      }
    ],
    "environments": ["Coastal", "Deserto", "Floresta", "Pântano", "Underdark"]
  },
  {
    "name": "Polvo Gigante",
    "img": "https://2e.aonprd.com/Images/Monsters/OctopusGiant.png",
    "size": "Grande",
    "hp": 52,
    "roll": "8d10 + 8",
    "ac": 11,
    "speed": 10,
    "swim": 60,
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 4,
    "wis": 10,
    "cha": 4,
    "skills": "Percepção +4, Furtividade +5",
    "senses": "Visão no escuro 60 ft.",
    "passive": 14,
    "cr": "1 ",
    "traits": [
      {
        "name": "Prender a Respiração",
        "text": "Enquanto estiver fora da água, o polvo pode prender a respiração por 1 hora"
      },
      {
        "name": "Camuflagem Submersa",
        "text": "O polvo tem vantagem em testes de Destreza (Furtividade) feitos enquanto estiver submerso."
      },
      {
        "name": "Respirar na Água",
        "text": "O polvo pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Tentáculos",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 15 ft., um alvo. Acerto: 10 (2d6 + 3) dano de concussãoe o alvo fica agarrado (DC 16 para escapar). Até o agarrão acabar, o alvo fica impedido e o polvo não pode usar seus tentáculos em outro alvo.",
        "attack": "Tentáculos|5|2d6+3"
      },
      {
        "name": "Nuvem de Tinta (Recarrega após um Descanso Curto ou Longo)",
        "text": "Uma nuvem de tinta de 20ft de raio se espalha em volta do polvo, se ele estiver submerso. A área fica com escuridão densa por 1 minuto, no entanto, uma corrente forte pode dispersar a tinta. Após liberar a tinta, o polvo pode usar a ação de Disparada com uma ação bônus."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Coruja Gigante",
    "img": "https://static.wikia.nocookie.net/dungeonsdragons/images/b/b3/Giantowl.jpg",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 5,
    "fly": 60,
    "str": 13,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 13,
    "cha": 10,
    "skills": "Percepção +5, Furtividade +4",
    "senses": "Visão no escuro 120 ft.",
    "passive": 15,
    "cr": "1/4",
    "traits": [
      {
        "name": "Sobrevoo",
        "text": "A coruja não provoca ataques de oportunidade quando voa para fora do alcance de um inimigo."
      },
      {
        "name": "Audição e visão aguçados",
        "text": "A coruja tem vantagem em testes de Sabedoria (Percepção) relacionados à visão e à audição."
      }
    ],
    "actions": [
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 8 (2d6 + 1) dano cortante.",
        "attack": "Garras|3|2d6+1"
      }
    ],
    "environments": ["Arctic", "Floresta", "Colina"]
  },
  {
    "name": "Serpente Venenosa Gigante",
    "img": "https://static.wikia.nocookie.net/dungeonsdragons/images/b/b3/Giantowl.jpg",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 14,
    "speed": 30,
    "swim": 30,
    "str": 10,
    "dex": 18,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skills": "Percepção +2",
    "senses": "Percepção às cegas 10 ft.",
    "passive": 12,
    "cr": "1/4",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 10 ft., um alvo. Acerto: 6 (1d4 + 4) dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 11, sofrendo 10 (3d6) de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso.",
        "attack": "Mordida|6|1d4+4"
      }
    ],
    "environments": ["Deserto", "Floresta", "Prado", "Pântano", "Underdark", "Urbano"]
  },
  {
    "name": "Rato Gigante",
    "img": "https://i.pinimg.com/originals/0b/7b/ed/0b7bedcb3236805cbe5a6d7274516fb0.png",
    "size": "Pequeno",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 30,
    "str": 7,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Visão no escuro 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O rato tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      },
      {
        "name": "Táticas de grupo",
        "text": "O rato tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do rato estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d4 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d4+2"
      }
    ],
    "environments": ["Floresta", "Pântano", "Underdark", "Urbano"]
  },
  {
    "name": "Rato Gigante (Infectado)",
    "img": "https://64.media.tumblr.com/3e95f33eafe06bac8a7a76641fb7496a/tumblr_nsgi08jVv81uqhshmo1_540.png",
    "size": "Pequeno",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 30,
    "str": 7,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Visão no escuro 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 3 (1d4 + 1) de dano perfurante.  Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Constituição DC 10 ou contrairá uma doença. Até a doença ser curada, o alvo não pode recuperar pontos de vida, exceto por meios mágicos, e o máximo de pontos de vida do alvo é reduzido em 3 (1d6) a cada 24 horas. Se o máximo de pontos de vida do alvo cair a 0 com resultado dessa doença, ele morre.",
        "attack": "Mordida|3|1d4+1"
      }
    ],
    "environments": []
  },

  //Parei aqui
  {
    "name": "Escorpião Gigante",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Giant-Scorpion.jpg",
    "size": "Grande",
    "hp": 52,
    "roll": "7d10 + 14",
    "ac": 15,
    "speed": 40,
    "str": 15,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "senses": "Percepção às cegas 60 ft.",
    "passive": 9,
    "cr": "3 ",
    "actions": [
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d8 + 2) dano de concussão,  e o alvo fica agarrado (DC 12 para escapar). O escorpião possui duas garras, cada uma podendo agarrar apenas um alvo.",
        "attack": "Garra|4|1d8+2"
      },
      {
        "name": "Ataques múltiplos",
        "text": "O escorpião realiza três ataques: dois com suas garras e um com seu ferrão."
      },
      {
        "name": "Ferrão",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 7 (1d10 + 2) dano perfurante, alvo deve realizar um teste de resistência de Constituição DC 12, sofrendo 22 (4d10) de dano de veneno se fracassar na resistência, ou metade desse dano se obtiver sucesso.",
        "attack": "Ferrão|4|1d10+2"
      }
    ],
    "environments": ["Deserto"]
  },
  {
    "name": "Cavalo Marinho Gigante",
    "img": "https://static.wikia.nocookie.net/wowpedia/images/6/6e/Seahorse.png",
    "size": "Grande",
    "hp": 16,
    "roll": "3d10",
    "ac": 13,
    "speed": 0,
    "swim": 40,
    "str": 12,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o cavalo marinho se mover, pelo menos, 6 metros em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de cabeçada, o alvo sofre 7 (2d6) de dano de concussão extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 11 para não cair no chão.",
        "attack": "Investida||2d6"
      },
      {
        "name": "Respirar na Água",
        "text": "O cavalo marinho pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Cabeçada",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) dano de concussão.",
        "attack": "|3|1d6+1"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Tubarão Gigante",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/10/Giant-Shark.jpg",
    "size": "Enorme",
    "hp": 126,
    "roll": "11d12 + 55",
    "ac": 13,
    "speed": 0,
    "swim": 50,
    "str": 23,
    "dex": 11,
    "con": 21,
    "int": 1,
    "wis": 10,
    "cha": 5,
    "skills": "Percepção +3",
    "senses": "Percepção às cegas 60 ft.",
    "passive": 13,
    "cr": "5 ",
    "traits": [
      {
        "name": "Frenesi de Sangue",
        "text": "O tubarão tem vantagem nas jogadas de ataque corpo-a-corpo contra qualquer criatura que não esteja com todos os seus pontos de vida."
      },
      {
        "name": "Respirar na Água",
        "text": "O tubarão pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +9 para atingir, alcance 5 ft., um alvo. Acerto: 22 (3d10 + 6) de dano perfurante.",
        "attack": "Mordida|9|3d10+6"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Aranha Gigante",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/299/1000/1000/638064499038216933.png",
    "size": "Grande",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 14,
    "speed": 30,
    "climb": 30,
    "str": 14,
    "dex": 16,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 4,
    "skills": "Furtividade +7",
    "senses": "Percepção às cegas 10 ft., Visão no escuro 60 ft.",
    "passive": 10,
    "cr": "1 ",
    "traits": [
      {
        "name": "Escalada Aracnídea",
        "text": "A aranha pode escalar superfícies difíceis, incluindo andar de cabeça para baixo em tetos, sem precisar realizar um teste de habilidade."
      },
      {
        "name": "Sentido na Teia",
        "text": "Quando em contato com uma teia, a aranha sabe a localização exata de qualquer outra criatura em contato com a mesma teia"
      },
      {
        "name": "Andar na Teia",
        "text": "A aranha  ignora restrições de movimento causadas por estar numa teia."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., uma criatura. Acerto: 7 (1d8 + 3) dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 11, sofrendo 9 (2d8) de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. Se o dano de veneno reduzir o alvo a 0 pontos de vida, o alvo estará estável, porém, envenenado, por 1 hora e paralisado enquanto estiver envenenado dessa forma.",
        "attack": "Mordida|5|1d8+3"
      },
      {
        "name": "Teia (Recarga 5-6)",
        "text": "Ataque à Distância com Arma: +5 para atingir, alcance 30ft/60ft, uma criatura. Acerto: O alvo ficará impedido pela teia. Com uma ação, o alvo impedido pode realizar um teste de Força DC 12, rompendo a teia com sucesso. A teia também pode ser atacada e destruída (CA 10; 5 pv; vulnerabilidade a fogo; imune a dano de concussão, veneno e psíquico).",
        "attack": "Teia|5|0"
      }
    ],
    "environments": ["Deserto", "Floresta", "Pântano", "Underdark", "Urbano"]
  },
  {
    "name": "Sapo Gigante",
    "img": "https://i.imgur.com/10l9yX9.png",
    "size": "Grande",
    "hp": 39,
    "roll": "6d10 + 6",
    "ac": 11,
    "speed": 20,
    "swim": 40,
    "str": 15,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "Visão no escuro 30 ft.",
    "passive": 10,
    "cr": "1 ",
    "traits": [
      {
        "name": "Anfíbio",
        "text": "O sapo pode respirar ar e água."
      },
      {
        "name": "Salto Parado",
        "text": "O salto à distância do sapo vai até 20 ft. e o salto em altura vai até  10 ft., com ou sem uma corrida inicial."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 7 (1d10 + 2) dano perfurante + 5 (1d10) de dano de veneno e o alvo fica agarrado (DC 13 para escapar). Até o agarrão acabar, o alvo fica impedido e o sapo não pode morder outro alvo",
        "attack": "Mordida|4|1d10+2"
      },
      {
        "name": "Engolir",
        "text": "O sapo realiza um ataque de mordida contra um alvo Médio ou menor que esteja agarrando. Se o ataque atingir, o alvo é engolido e o agarrão termina. Enquanto estiver engolido, o alvo estará cego e impedido, ele terá cobertura total contra ataques e outros efeitos de fora do sapo e sofre 10 (3d6) de dano ácido no começo de cada turno do sapo. O sapo pode ter apenas um alvo engolido por vez. Se o sapo morrer, uma criatura engolida não estará mais impedida por ele e poderá escapar do corpo usando 1,5 metro de movimento, estando caída ao sair."
      }
    ],
    "environments": ["Coastal", "Deserto", "Floresta", "Pântano", "Underdark"]
  },
  {
    "name": "Abutre Gigante",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/c/c4/Giantvulture.jpg",
    "size": "Grande",
    "hp": 22,
    "roll": "3d10 + 6",
    "ac": 10,
    "speed": 10,
    "fly": 60,
    "str": 15,
    "dex": 10,
    "con": 15,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Visão e Faro aguçados",
        "text": "O abutre tem vantagem em testes de Sabedoria (Percepção) relacionados à visão e ao olfato."
      },
      {
        "name": "Táticas de grupo",
        "text": "O abutre tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do abutre estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O abutre realiza dois ataques: um com sua bicada e um com suas garras."
      },
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 7 (2d4 + 2) de dano perfurante.",
        "attack": "Bicada|4|2d4+2"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 9 (2d6 + 2) dano cortante.",
        "attack": "Garras|4|2d6+2"
      }
    ],
    "environments": ["Deserto", "Prado"]
  },
  {
    "name": "Vespa Gigante",
    "img": "https://www.worldanvil.com/uploads/images/432370d23869ec3538fb7c294fa91307.jpg",
    "size": "Médio",
    "hp": 13,
    "roll": "3d8",
    "ac": 12,
    "speed": 10,
    "fly": 50,
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "passive": 10,
    "cr": "1/2",
    "actions": [
      {
        "name": "Ferrão",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 5 (1d6 + 2) dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 11, sofrendo 10 (3d6) de dano de veneno se fracassar na resistência, ou metade desse dano se obtiver sucesso. Se o veneno reduzir os pontos de vida do alvo a 0, ele fica estável mas envenenado por 1 hora, mesmo após recuperar pontos de vida, e fica paralisado enquanto estiver envenenado dessa forma.",
        "attack": "Ferrão|4|1d6+2"
      }
    ],
    "environments": ["Floresta", "Prado", "Urbano"]
  },
  {
    "name": "Arminho Gigante",
    "img": "https://i.pinimg.com/originals/29/30/81/293081e5d8170a8df4638d7da52d722b.jpg",
    "size": "Médio",
    "hp": 9,
    "roll": "2d8",
    "ac": 13,
    "speed": 40,
    "str": 11,
    "dex": 16,
    "con": 10,
    "int": 4,
    "wis": 12,
    "cha": 5,
    "skills": "Percepção +3, Furtividade +5",
    "senses": "Visão no escuro 60 ft.",
    "passive": 13,
    "cr": "1/8",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O arminho tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 5 (1d4 + 3) de dano perfurante.",
        "attack": "Mordida|5|1d4+3"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Aranha-Lobo Gigante",
    "img": "https://i.pinimg.com/564x/e9/9d/70/e99d700416c01a2b020ec41b7b64bf66.jpg",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 13,
    "speed": 40,
    "climb": 40,
    "str": 12,
    "dex": 16,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 4,
    "skills": "Percepção +3, Furtividade +7",
    "senses": "Percepção às cegas 10 ft., Visão no escuro 60 ft.",
    "passive": 13,
    "cr": "1/4",
    "traits": [
      {
        "name": "Escalada Aracnídea",
        "text": "A aranha pode escalar superfícies difíceis, incluindo andar de cabeça para baixo em tetos, sem precisar realizar um teste de habilidade."
      },
      {
        "name": "Sentido na Teia",
        "text": "Quando em contato com uma teia, a aranha sabe a localização exata de qualquer outra criatura em contato com a mesma teia"
      },
      {
        "name": "Andar na Teia",
        "text": "A aranha ignora restrições de movimento causadas por estar numa teia."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +3 para atingir, alcance 5 ft., uma criatura. Acerto: 4 (1d6 + 1) dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 11, sofrendo 7 (2d6) de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. Se o dano de veneno reduzir o alvo a 0 pontos de vida, o alvo estará estável, porém, envenenado, por 1 hora e paralisado enquanto estiver envenenado dessa forma.",
        "attack": "Mordida|3|1d6+1"
      }
    ],
    "environments": ["Coastal", "Deserto", "Floresta", "Prado", "Colina"]
  },
  {
    "name": "Bode",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/1/14/Mountain_goat5e.jpeg",
    "size": "Médio",
    "hp": 4,
    "roll": "1d8",
    "ac": 10,
    "speed": 40,
    "str": 12,
    "dex": 10,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o bode se mover, pelo menos, 20 ft.  em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de cabeçada, o alvo sofre 2 (1d4) de dano de concussão extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 10 para não cair no chão.",
        "attack": "Investida||1d4"
      },
      {
        "name": "Estável",
        "text": "O bode possui vantagem em testes de resistência de Força e Destreza feitos contra efeitos que poderiam derruba-lo no chão."
      }
    ],
    "actions": [
      {
        "name": "Cabeçada",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 3 (1d4 + 1) dano de concussão.",
        "attack": "Cabeçada|3|1d4+1"
      }
    ],
    "environments": ["Prado", "Colina", "Montanha", "Urbano"]
  },
  {
    "name": "Falcão",
    "img": "https://t3.ftcdn.net/jpg/05/70/08/30/360_F_570083074_ahODGPbZJ6KUWEuPpO07Vwsd7ByZFJ9R.jpg",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 5,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 14,
    "cha": 6,
    "skills": "Percepção +4",
    "passive": 14,
    "cr": "0 ",
    "traits": [
      {
        "name": "Visão aguçada",
        "text": "O falcão tem vantagem em Sabedoria (Percepção) relacionados à visão."
      }
    ],
    "actions": [
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano cortante.",
        "attack": "Garras|5|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Tubarão Caçador",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d94akwz-62a55f35-017b-4c07-96cc-d36b9218ec70.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk0YWt3ei02MmE1NWYzNS0wMTdiLTRjMDctOTZjYy1kMzZiOTIxOGVjNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k1F6rw6F-LUZzT8oI_vcLubbmUDYO7_vLq1ymAnSvhc",
    "size": "Grande",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 12,
    "swim": 40,
    "str": 18,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skills": "Percepção +2",
    "senses": "Visão no escuro 30 ft.",
    "passive": 12,
    "cr": "2 ",
    "traits": [
      {
        "name": "Frenesi de Sangue",
        "text": "O tubarão tem vantagem nas jogadas de ataque corpo-a-corpo contra qualquer criatura que não esteja com todos os seus pontos de vida."
      },
      {
        "name": "Respirar na Água",
        "text": "O tubarão pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 13 (2d8 + 4) de dano perfurante.",
        "attack": "Mordida|6|2d8+4"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Hiena",
    "img": "https://i.pinimg.com/736x/5e/f8/28/5ef828f0e2954f26df3e7db6011f3ef3.jpg",
    "size": "Médio",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 11,
    "speed": 50,
    "str": 11,
    "dex": 13,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Táticas de grupo",
        "text": "A hiena tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados da hiena estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque Corpo-a-Corpo com Arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 3 (1d6) de dano perfurante.",
        "attack": "Mordida|2|1d6"
      }
    ],
    "environments": ["Deserto", "Floresta", "Prado", "Colina"]
  },
  {
    "name": "Chacal",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Jackal.jpg",
    "size": "Pequeno",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 40,
    "str": 8,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O chacal tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      },
      {
        "name": "Táticas de grupo",
        "text": "O chacal tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do chacal estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +1 para atingir, alcance 5 ft., um alvo. Acerto: 1 (1d4 - 1) de dano perfurante.",
        "attack": "Mordida|1|1d4-1"
      }
    ],
    "environments": ["Deserto", "Prado"]
  },
  {
    "name": "Baleia Assassina",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/04/killer-whale.jpg",
    "size": "Enorme",
    "hp": 90,
    "roll": "12d12 + 12",
    "ac": 12,
    "swim": 60,
    "str": 19,
    "dex": 10,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3",
    "senses": "Percepção às cegas 120 ft.",
    "passive": 13,
    "cr": "3 ",
    "traits": [
      {
        "name": "Eco Localização",
        "text": "Enquanto não puder ouvir, a baleia perderá a percepção às cegas."
      },
      {
        "name": "Prender a Respiração",
        "text": "A baleia consegue prender sua respiração por 30 minutos."
      },
      {
        "name": "Audição aguçada",
        "text": "A baleia tem vantagem em testes de Sabedoria (Percepção) relacionados à audição"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 21 (5d6 + 4) de dano perfurante."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Leão",
    "img": "https://5e.tools/img/bestiary/BGG/Spotted%20Lion.webp",
    "size": "Grande",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 12,
    "speed": 50,
    "str": 17,
    "dex": 15,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Percepção +3, Furtividade +6",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O leão tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      },
      {
        "name": "Táticas de grupo",
        "text": "O leão tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do leão estiver a 5ft da criaturas e não estiver incapacitado."
      },
      {
        "name": "Bote",
        "text": "Se o leão se mover, pelo menos, 20 ft. em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de garra, o alvo deve ser bem sucedido num teste de resistência de Força DC 13 para não cair no chão. Se o alvo cair no chão, o leão poderá realizar uma ação bônus para realizar um ataque de mordida contra ele."
      },
      {
        "name": "Salto em Corrida",
        "text": "Como parte do seu movimento e depois de uma corrida inicial de 3 metros, o leão pode realizar um salto em distância de até 7,5 metros."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 7 (1d8 + 3) de dano perfurante.",
        "attack": "Mordida|5|1d8+3"
      },
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d6 + 3) dano cortante.",
        "attack": "Garra|5|1d6+3"
      }
    ],
    "environments": ["Deserto", "Prado", "Colina", "Montanha"]
  },
  {
    "name": "Lagarto",
    "img": "https://i.pinimg.com/originals/a3/e8/12/a3e812f75810022f6bb9ac42c73e97b7.png",
    "size": "Miúda",
    "hp": 2,
    "roll": "1d4",
    "ac": 10,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "senses": "Visão no escuro 30 ft.",
    "passive": 9,
    "cr": "0 ",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +0 para atingir, alcance 5 ft., um alvo. Acerto: 1 de dano perfurante.",
        "attack": "Mordida||1"
      }
    ],
    "environments": []
  },
  {
    "name": "Mamute",
    "img": "https://www.pngitem.com/pimgs/m/236-2361840_d-d-5e-mammoth-png-download-mammoth-art.png",
    "size": "Enorme",
    "hp": 126,
    "roll": "11d12 + 55",
    "ac": 13,
    "speed": 40,
    "str": 24,
    "dex": 9,
    "con": 21,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "6 ",
    "traits": [
      {
        "name": "Investida Esmagadora",
        "text": "Se o mamute se mover, pelo menos 20 ft. em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de presa, o alvo deve ser bem sucedido num teste de resistência de Força DC 18 para não cair no chão. Se o alvo cair no chão, o elefante pode realizar um ataque de pisotear contra ele com uma ação bônus."
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque corpo-a-corpo com arma: +10 para atingir, alcance 10 ft., um alvo. Acerto: 25 (4d8 + 7) de dano perfurante.",
        "attack": "Presas|10|4d8+7"
      },
      {
        "name": "Pisotear",
        "text": "Ataque corpo-a-corpo com arma: +10 para atingir, alcance 5 ft., one prone creature. Acerto: 29 (4d10 + 7) dano de concussão.",
        "attack": "Pisotear|10|4d10+7"
      }
    ],
    "environments": ["Arctic"]
  },
  {
    "name": "Mastim",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/339/1000/1000/638064501182707662.png",
    "size": "Médio",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 12,
    "speed": 40,
    "str": 13,
    "dex": 14,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "1/8",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O mastim tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d6 + 1) de dano perfurante.  Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de DC 11  ou será derrubada no chão.",
        "attack": "Mordida|3|1d6+1"
      }
    ],
    "environments": ["Floresta", "Colina", "Urbano"]
  },
  {
    "name": "Mula",
    "img": "https://img.freepik.com/premium-photo/donkey-2d-vector-illustration-cartoon-white-background_889056-22679.jpg",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 10,
    "speed": 40,
    "str": 14,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/8",
    "traits": [
      {
        "name": "Besta de Carga",
        "text": "A mula é considerada como um animal Grande com os propósitos de determinar sua capacidade de carga."
      },
      {
        "name": "Estável",
        "text": "A mula possui vantagem em testes de resistência de Força e Destreza feitos contra efeitos que poderiam derruba-la no chão."
      }
    ],
    "actions": [
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d4 + 2) dano de concussão.",
        "attack": "Cascos|4|1d4+2"
      }
    ],
    "environments": ["Deserto", "Colina", "Urbano"]
  },
  {
    "name": "Polvo",
    "img": "https://i.pinimg.com/736x/fb/a9/31/fba931410663726e49fecbdc0843ea2f.jpg",
    "size": "Pequeno",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 5,
    "swim": 30,
    "str": 4,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 10,
    "cha": 4,
    "skills": "Percepção +2, Furtividade +4",
    "senses": "Visão no escuro 30 ft.",
    "passive": 12,
    "cr": "0 ",
    "traits": [
      {
        "name": "Prender a Respiração",
        "text": "nquanto estiver fora da água, o polvo pode prender a respiração por 30 minutos."
      },
      {
        "name": "Camuflagem Submersa",
        "text": "O polvo tem vantagem em testes de Destreza (Furtividade) feitos enquanto estiver submerso."
      },
      {
        "name": "Respirar na Água",
        "text": "O polvo pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Tentáculos",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano de concussão,e o alvo fica agarrado (DC 10 para escapar). Até o agarrão acabar, o polvo não pode usar seus tentáculos em outro alvo.",
        "attack": "Tentáculos|4|1"
      },
      {
        "name": "Nuvem de Tinta (Recarrega após um Descanso Curto ou Longo)",
        "text": "Uma nuvem de tinta de 5ft de raio se espalha em volta do polvo, se ele estiver submerso. A área fica com escuridão densa por 1 minuto, no entanto, uma corrente forte pode dispersar a tinta. Após liberar a tinta, o polvo pode usar a ação de Disparada com uma ação bônus."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Coruja",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/533/1000/1000/636376331660233857.jpeg",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 5,
    "fly": 60,
    "str": 3,
    "dex": 13,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skills": "Percepção +3, Furtividade +3",
    "senses": "Visão no escuro 120 ft.",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Sobrevoo",
        "text": "A coruja não provoca ataques de oportunidade quando voa para fora do alcance de um inimigo."
      },
      {
        "name": "Audição e visão aguçados",
        "text": "A coruja tem vantagem em testes de Sabedoria (Percepção) relacionados à visão e à audição."
      }
    ],
    "actions": [
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano cortante.",
        "attack": "Garras|3|1"
      }
    ],
    "environments": ["Arctic", "Floresta"]
  },
  {
    "name": "Pantera",
    "img": "https://i.imgur.com/cEHre6m.png",
    "size": "Médio",
    "hp": 13,
    "roll": "3d8",
    "ac": 12,
    "speed": 50,
    "climb": 40,
    "str": 14,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 7,
    "skills": "Percepção +4, Furtividade +6",
    "passive": 14,
    "cr": "1/4",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "A pantera tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      },
      {
        "name": "Bote",
        "text": "Se a pantera se mover, pelo menos, 20ft em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de garra, o alvo deve ser bem sucedido num teste de resistência de Força DC 12 para não cair no chão. Se o alvo cair no chão, a pantera poderá realizar uma ação bônus para realizar um ataque de mordida contra ele."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 5 (1d6 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d6+2"
      },
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 4 (1d4 + 2) dano cortante.",
        "attack": "Garra|4|1d4+2"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Plesiossauro",
    "img": "https://st3.depositphotos.com/1409882/35928/v/450/depositphotos_359281714-stock-illustration-illustration-plesiosaurs-extinct-mesozoic-marine.jpg",
    "size": "Grande",
    "hp": 68,
    "roll": "8d10 + 24",
    "ac": 13,
    "speed": 20,
    "swim": 40,
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Percepção +3, Furtividade +4",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Prender a Respiração",
        "text": "O plesiossauro pode prender a respiração por 1 hora."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 10 ft., um alvo. Acerto: 14 (3d6 + 4) de dano perfurante.",
        "attack": "Mordida|6|3d6+4"
      }
    ],
    "environments": ["Coastal", "Underwater"]
  },
  {
    "name": "Serpente Venenosa",
    "img": "https://www.worldanvil.com/uploads/images/d04201b3de85f66cae829b80b26a1144.jpg",
    "size": "Miúda",
    "hp": 2,
    "roll": "1d4",
    "ac": 13,
    "speed": 30,
    "swim": 30,
    "str": 2,
    "dex": 16,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "Percepção às cegas 10 ft.",
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 1 dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 10, sofrendo 5 (2d4) de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso.",
        "attack": "Mordida|5|1"
      }
    ],
    "environments": ["Coastal", "Deserto", "Floresta", "Prado", "Colina", "Pântano"]
  },
  {
    "name": "Urso Polar",
    "img": "https://i.pinimg.com/736x/7e/8d/49/7e8d497c45deb55025d301e01ffdcd3f.jpg",
    "size": "Grande",
    "hp": 42,
    "roll": "5d10 + 15",
    "ac": 12,
    "speed": 40,
    "swim": 30,
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O urso tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O urso realiza dois ataques: um com sua mordida e um com suas garras"
      },
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 9 (1d8 + 5) de dano perfurante.",
        "attack": "Mordida|7|1d8+5"
      },
      {
        "name": "Garras",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 12 (2d6 + 5) dano cortante.",
        "attack": "Garras|7|2d6+5"
      }
    ],
    "environments": ["Arctic", "Underdark"]
  },
  {
    "name": "Pónei",
    "img": "https://www.krydodan.com/mounts/vor2.png",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 10,
    "speed": 40,
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 7 (2d4 + 2) dano de concussão.",
        "attack": "Cascos|4|2d4+2"
      }
    ],
    "environments": ["Urbano"]
  },
  {
    "name": "Pteranodonte",
    "img": "https://2e.aonprd.com/Images/Monsters/Pterosaur_Pteranodon.png",
    "size": "Médio",
    "hp": 13,
    "roll": "3d8",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 12,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "skills": "Percepção +1",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Sobrevoo",
        "text": "O ptranodonte não provoca ataques de oportunidade quando voa para fora do alcance de um inimigo."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +3 para atingir, alcance 5 ft., um alvo. Acerto: 6 (2d4 + 1) dano perfurante"
      }
    ],
    "environments": ["Coastal", "Prado", "Montanha"]
  },
  {
    "name": "Piranha",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/309/1000/1000/638064499305106998.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "swim": 40,
    "str": 2,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "senses": "Visão no escuro 60 ft.",
    "passive": 8,
    "cr": "0 ",
    "traits": [
      {
        "name": "Frenesi de Sangue",
        "text": "A piranha tem vantagem nas jogadas de ataque corpo-a-corpo contra qualquer criatura que não esteja com todos os seus pontos de vida."
      },
      {
        "name": "Respirar na Água",
        "text": "A piranha pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 1 de dano perfurante.",
        "attack": "Mordida|5|1"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Rato",
    "img": "https://www.dandwiki.com/w/images/8/8b/Rat.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 10,
    "speed": 20,
    "str": 2,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Visão no escuro 30 ft.",
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O rato tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +0 para atingir, alcance 5 ft., um alvo. Acerto: 1 de dano perfurante.",
        "attack": "Mordida||1"
      }
    ],
    "environments": ["Pântano", "Urbano"]
  },
  {
    "name": "Corvo",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/553/1000/1000/636376341568391037.jpeg",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 10,
    "fly": 50,
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Mímica",
        "text": "O corvo é capaz de imitar sons simples que ele ouve,como pessoas cochichando, um bebê chorando ou um animal rangendo. Uma criatura que ouvir os sons pode perceber que são imitações se for bem sucedida num teste de Sabedoria (Intuição) DC 10."
      }
    ],
    "actions": [
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 1 de dano perfurante."
      }
    ],
    "environments": ["Colina", "Pântano", "Urbano"]
  },
  {
    "name": "Tubarão dos Arrecifes",
    "img": "https://i.postimg.cc/MK9LhHsv/Silvertip-Shark2.png",
    "size": "Médio",
    "hp": 22,
    "roll": "4d8 + 4",
    "ac": 12,
    "swim": 40,
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skills": "Percepção +2",
    "senses": "Percepção às cegas 30 ft.",
    "passive": 12,
    "cr": "1/2",
    "traits": [
      {
        "name": "Táticas de grupo",
        "text": "O tubarão tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do tubarão estiver a 5ft da criaturas e não estiver incapacitado."
      },
      {
        "name": "Respirar na Água",
        "text": "O tubarão pode respirar apenas em baixo d’água."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 6 (1d8 + 2) de dano perfurante.",
        "attack": "Mordida|4|1d8+2"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Rinoceronte",
    "img": "https://static.wikia.nocookie.net/here-be-dragons/images/5/59/Woolly_Rhinoceros.jpg",
    "size": "Grande",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 11,
    "speed": 40,
    "str": 21,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "2 ",
    "traits": [
      {
        "name": "Investida",
        "text": "Se o rinoceronte se mover, pelo menos, 20 ft.  em linha reta em direção de uma criatura logo antes de atingi-la com seu ataque de chifre, o alvo sofre 9 (2d8) de dano de concussão extra. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força DC 15 para não cair no chão.",
        "attack": "Investida||2d8"
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 14 (2d8 + 5) dano de concussão.",
        "attack": "Presas|7|2d8+5"
      }
    ],
    "environments": ["Prado"]
  },
  {
    "name": "Cavalo de Montaria",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/9/904/1000/1000/636334288913250513.jpeg",
    "size": "Grande",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 10,
    "speed": 60,
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 8 (2d4 + 3) dano de concussão.",
        "attack": "Cascos|2|2d4+3"
      }
    ],
    "environments": ["Prado", "Urbano"]
  },
  {
    "name": "Tigre Dentes-de-Sabre",
    "img": "https://t3.ftcdn.net/jpg/06/67/58/74/360_F_667587417_qZnUqYdBkGn75j4MtO4g1xcDWW5wW7JY.jpg",
    "size": "Grande",
    "hp": 52,
    "roll": "7d10 + 14",
    "ac": 12,
    "speed": 40,
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Percepção +3, Furtividade +6",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O tigre tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      },
      {
        "name": "Bote",
        "text": "Se o tigre se mover, pelo menos 20 ft.  em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de  garra, o alvo deve ser bem sucedido num teste de resistência de Força DC 14 para não cair no chão. Se o alvo cair no chão, o tigre poderá realizar uma ação bônus para realizar um ataque de mordida contra ele."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 10 (1d10 + 5) de dano perfurante.",
        "attack": "Mordida|6|1d10+5"
      },
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 12 (2d6 + 5) dano cortante.",
        "attack": "Garra|6|2d6+5"
      }
    ],
    "environments": ["Arctic", "Montanha"]
  },
  {
    "name": "Escorpião",
    "img": "https://static.wikia.nocookie.net/teso_gamepedia/images/7/76/Concept_art_Giant_scorpion.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 10,
    "str": 2,
    "dex": 11,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "senses": "Percepção às cegas 10 ft.",
    "passive": 9,
    "cr": "0 ",
    "actions": [
      {
        "name": "Ferrão",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., uma criatura. Acerto: 1 dano perfurante, e o alvo deve realizar um teste de resistência de Constituição DC 9, sofrendo 4 (1d8) de dano de veneno se fracassar na resistência, ou metade desse dano se obtiver sucesso.",
        "attack": "Ferrão|2|1"
      }
    ],
    "environments": ["Deserto"]
  },
  {
    "name": "Cavalo Marinho",
    "img": "https://static.wikia.nocookie.net/wowpedia/images/6/6e/Seahorse.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "swim": 20,
    "str": 1,
    "dex": 12,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Respirar na Água",
        "text": "O cavalo marinho pode respirar apenas em baixo d’água."
      }
    ],
    "environments": []
  },
  {
    "name": "Aranha",
    "img": "https://www.worldanvil.com/uploads/images/33efd1a6f45814e4541ca4cfdab0ed24.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "skills": "Furtividade +4",
    "senses": "Visão no escuro 30 ft.",
    "passive": 12,
    "cr": "0 ",
    "traits": [
      {
        "name": "Escalada Aracnídea",
        "text": "A aranha pode escalar superfícies difíceis, incluindo andar de cabeça para baixo em tetos, sem precisar realizar um teste de habilidade."
      },
      {
        "name": "Sentido na Teia",
        "text": "Quando em contato com uma teia, a aranha sabe a localização exata de qualquer outra criatura em contato com a mesma teia"
      },
      {
        "name": "Andar na Teia",
        "text": "A aranha  ignora restrições de movimento causadas por estar numa teia."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., uma criatura. Acerto: 1 dano perfurante,e o alvo deve ser bem sucedido num teste de resistência de Constituição DC 9 ou sofrerá 2 (1d4) de dano de veneno.",
        "attack": "Mordida|4|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Stirge",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/8/86/Stirge-5e.png",
    "size": "Miúda",
    "hp": 2,
    "roll": "1d4",
    "ac": 14,
    "speed": 10,
    "fly": 40,
    "str": 4,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 8,
    "cha": 6,
    "senses": "Visão no escuro 60 ft.",
    "passive": 9,
    "cr": "1/8",
    "actions": [
      {
        "name": "Drenar Sangue",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., uma criatura. Acerto: 5 (1d4 + 3) dano perfurante, e o stirge se prende ao alvo. Enquanto estiver preso, o stirge não pode atacar. Ao invés disso, no início de cada um dos turnos do stirge, o alvo perde 5 (1d4 + 3) pontos de vida devido à perda de sangue. O stirge pode se desprender gastando 1,5 metro de seu movimento. Ele fará isso após drenar 10 pontos de vida de sangue do alvo ou o alvo morrer. Uma criatura, incluindo o alvo, pode usar uma ação para desprender o stirge.",
        "attack": "Drenar Sangue|5|1d4+3"
      }
    ],
    "environments": [
      "Coastal",
      "Deserto",
      "Floresta",
      "Prado",
      "Colina",
      "Montanha",
      "Pântano",
      "Underdark",
      "Urbano"
    ]
  },
  {
    "name": "Tigre",
    "img": "https://static.wikia.nocookie.net/rythiae/images/7/71/Dire_Tiger.jpg",
    "size": "Grande",
    "hp": 37,
    "roll": "5d10 + 10",
    "ac": 12,
    "speed": 40,
    "str": 17,
    "dex": 15,
    "con": 14,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Percepção +3, Furtividade +6",
    "senses": "Visão no escuro 60 ft.",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Faro aguçado",
        "text": "O tigre tem vantagem em testes de Sabedoria (Percepção) relacionados ao olfato"
      },
      {
        "name": "Bote",
        "text": "Se o tigre se mover, pelo menos, 20 ft.  em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de garra, o alvo deve ser bem sucedido num teste de resistência de Força DC13 para não cair no chão. Se o alvo cair no chão, o tigre poderá realizar uma ação bônus para realizar um ataque de mordida contra ele."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 8 (1d10 + 3) de dano perfurante.",
        "attack": "Mordida|5|1d10+3"
      },
      {
        "name": "Garra",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., um alvo. Acerto: 7 (1d8 + 3) dano cortante."
      }
    ],
    "environments": ["Floresta", "Prado"]
  },
  {
    "name": "Tricerátops",
    "img": "https://images.dinosaurpictures.org/torosaurus-latus-a-prehistoric-era-sergey-krasovskiy_1aa6.jpg",
    "size": "Enorme",
    "hp": 95,
    "roll": "10d12 + 30",
    "ac": 13,
    "speed": 50,
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "passive": 10,
    "cr": "5 ",
    "traits": [
      {
        "name": "Investida Esmagadora",
        "text": "Se o tricerátops se mover, 20 ft.  em linha reta até uma criatura e então atingi-la com um ataque de chifres no mesmo turno, o alvo deve ser bem sucedido num teste de resistência de Força DC13 para não cair no chão. Se o alvo cair no chão, o tricerátops pode realizar um ataque de pisotear contra ele, com uma ação bônus."
      }
    ],
    "actions": [
      {
        "name": "Presas",
        "text": "Ataque corpo-a-corpo com arma: +9 para atingir, alcance 5 ft., um alvo. Acerto: 24 (4d8 + 6) de dano perfurante.",
        "attack": "Presas|9|4d8+6"
      },
      {
        "name": "Pisotear",
        "text": "Ataque corpo-a-corpo com arma: +9 para atingir, alcance 5 ft., one prone creature. Acerto: 22 (3d10 + 6) dano de concussão",
        "attack": "Pisotear|9|3d10+6"
      }
    ],
    "environments": ["Prado"]
  },
  {
    "name": "Abutre",
    "img": "https://i.pinimg.com/originals/02/6d/2f/026d2ff39a89768ec17b71116fab3cc8.png",
    "size": "Médio",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 10,
    "speed": 10,
    "fly": 50,
    "str": 7,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "skills": "Percepção +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Visão e Faro aguçados",
        "text": "O abutre tem vantagem em testes de Sabedoria (Percepção) relacionados à visão e ao olfato."
      },
      {
        "name": "Táticas de grupo",
        "text": "O abutre tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do abutre estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Bicada",
        "text": "Ataque corpo-a-corpo com arma: +2 para atingir, alcance 5 ft., um alvo. Acerto: 2 (1d4) de dano perfurante.",
        "attack": "Bicada|2|1d4"
      }
    ],
    "environments": ["Deserto", "Prado", "Colina"]
  },
  {
    "name": "Cavalo de Guerra",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Warhorse.jpg",
    "size": "Grande",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 60,
    "str": 18,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Investida Esmagadora",
        "text": " Se o cavalo se mover, pelo menos, 20 ft. em linha reta em direção de um alvo logo antes de atingi-lo com seu ataque de cascos, o alvo deve ser bem sucedido num teste de resistência de Força DC14 para não cair no chão. Se o alvo cair no chão, o cavalo poderá realizar uma ação bônus para realizar outro ataque de cascos contra ele."
      }
    ],
    "actions": [
      {
        "name": "Cascos",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 11 (2d6 + 4) dano de concussão.",
        "attack": "|4|2d6+4"
      }
    ],
    "environments": ["Urbano"]
  },
  {
    "name": "Arminho",
    "img": "https://www.kryxrpg.com/static/a3295959eba1c63c1b3fd3ab3467114e/53c9b/weasel.png",
    "size": "Miúda",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "speed": 30,
    "str": 3,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 3,
    "skills": "Percepção +3, Furtividade +5",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O arminho tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +5 para atingir, alcance 5 ft., uma criatura. Acerto: 1 de dano perfurante.",
        "attack": "Mordida|5|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Lobo",
    "img": "https://i.pinimg.com/736x/03/5c/03/035c0395f48db185b97f7d3ba5ac7c59.jpg",
    "size": "Médio",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 13,
    "speed": 40,
    "str": 12,
    "dex": 15,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skills": "Percepção +3, Furtividade +4",
    "passive": 13,
    "cr": "1/4",
    "traits": [
      {
        "name": "Audição e Faro aguçados",
        "text": "O lobo tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato."
      },
      {
        "name": "Táticas de grupo",
        "text": "O lobo tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do lobo estiver a 5ft da criaturas e não estiver incapacitado."
      }
    ],
    "actions": [
      {
        "name": "Mordida",
        "text": "Ataque corpo-a-corpo com arma: +4 para atingir, alcance 5 ft., um alvo. Acerto: 7 (2d4 + 2) de dano perfurante.  Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de DC 11 ou será derrubada no chão.",
        "attack": "Mordida|4|2d4+2"
      }
    ],
    "environments": ["Floresta", "Prado", "Colina"]
  },
  {
    "name": "Elemental de Ar",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/689/1000/1000/638062015555039371.png",
    "type": "elemental",
    "size": "Grande",
    "hp": 90,
    "roll": "12d10 + 24",
    "ac": 15,
    "speed": 0,
    "fly": 90,
    "flyDetails": "hover",
    "str": 14,
    "dex": 20,
    "con": 14,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "resistances": "Elétrico, Trovejante; Concussão, Perfurante, e Cortante de ataques não-mágicos",
    "immunities": "Veneno",
    "conditionImmunities": "Exausto, Agarrado, Paralizado, Petrificado, Envenenado, Caído, Impedido, Inconsciente",
    "senses": "Visão no escuro 60ft.",
    "passive": 10,
    "languages": "Auran",
    "cr": "5 ",
    "traits": [
      {
        "name": "Air Form",
        "text": "O elemental pode entrar no espaço de uma criatura hostil e ficar parado nele. Ele pode se mover através de um espaço de até 1 inch de espessura sem se espremer."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O elemental realiza dois ataques de pancada."
      },
      {
        "name": "Pancada",
        "text": "Ataque corpo-a-corpo com arma: +8 para atingir, alcance 5 ft., um alvo. Acerto: 14 (2d8 + 5) dano de concussão."
      },
      {
        "name": "Vendaval (Recarga 4-6)",
        "text": "Cada criatura no espaço do elemental deve realizar um teste de resistência de Força DC 13  Se falhar, um alvo sofre 15 (3d8 + 2) de dano de concussão e é arremessado a até 6 metros do elemental em uma direção aleatória e cai no chão. Se um alvo arremessado atingir um objeto, como uma parede ou solo, ele sofre 3 (1d6) de dano de concussão para cada 3 metros que ele percorreu. Se o alvo for arremessado em outra criatura, a criatura deve ser bem sucedida num teste de Destreza DC13 ou sofrerá a mesma quantidade de dano e cairá no chão. Se o teste de resistência for bem sucedido, o alvo sofre metade do dano de concussão e não é arremessado ou fica caído no chão."
      }
    ],
    "environments": ["Deserto", "Montanha"]
  },
  {
    "name": "Elemental de Terra",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/692/1000/1000/638062015664899420.png",
    "type": "elemental",
    "size": "Grande",
    "hp": 126,
    "roll": "12d10 + 60",
    "ac": 17,
    "speed": 30,
    "burrow": 30,
    "str": 20,
    "dex": 8,
    "con": 20,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "vulnerabilities": "Trovejante",
    "resistances": "Concussão, Perfurante, e Cortante de ataques não-mágicos",
    "immunities": "Veneno",
    "conditionImmunities": "Exausto, Paralizado, Petrificado, Envenenado, Inconsciente",
    "senses": "Visão no escuro 60 ft., Tremorsense 60 ft",
    "passive": 10,
    "languages": "Terran",
    "cr": "5 ",
    "traits": [
      {
        "name": "Deslizar na Terra",
        "text": "O elemental pode escavar através de terra e rocha não-mágica bruta. Enquanto faz isso, o elemental não perturba o material pelo qual se move."
      },
      {
        "name": "Monstro de Cerco",
        "text": "O elemental causa o dobro do dano a objetos e estruturas."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O elemental realiza dois ataques de pancada."
      },
      {
        "name": "Pancada",
        "text": "Ataque corpo-a-corpo com arma: +8 para atingir, alcance 10 ft., um alvo. Acerto: 14 (2d8 + 5) dano de concussão."
      }
    ],
    "environments": ["Underdark"]
  },
  {
    "name": "Elemental do Fogo",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/695/1000/1000/638062015772259390.png",
    "type": "elemental",
    "size": "Grande",
    "hp": 102,
    "roll": "12d10 + 36",
    "ac": 13,
    "speed": 50,
    "str": 10,
    "dex": 17,
    "con": 16,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "resistances": "Concussão, Perfurante, e Cortante de ataques não-mágicos",
    "immunities": "Fogo, Veneno",
    "conditionImmunities": "Exausto, Agarrado, Paralizado, Petrificado, Envenenado, Caído, Impedido, Inconsciente",
    "senses": "Visão no escuro 60 ft.",
    "passive": 10,
    "languages": "Ignan",
    "cr": "5 ",
    "traits": [
      {
        "name": "Forma de Fogo",
        "text": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space e stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage e catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
      },
      {
        "name": "Iluminação",
        "text": "O elemental emite luz plena num raio de 9 metros e penumbra a 9 metros adicionais"
      },
      {
        "name": "Susceptibilidade à Água",
        "text": "Para cada 5 ft que o elemental se mova na água, ou para cada 4 litros de água jogados nele, ele sofre 1 de dano de frio."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O elemental realiza dois ataques de toque."
      },
      {
        "name": "Toque",
        "text": "Ataque corpo-a-corpo com arma: +6 para atingir, alcance 5 ft., um alvo. Acerto: 10 (2d6 + 3) de dano de fogo. Se o alvo for uma criatura ou objeto inflamável, ele se incendeia. Até que uma criatura use uma ação para extinguir o fogo, a criatura sofre 5 (1d10) de dano de fogo no início de cada um dos turnos dela."
      }
    ],
    "environments": ["Deserto"]
  },
  {
    "name": "Elemental da Água",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/698/1000/1000/638062015886859442.png",
    "type": "elemental",
    "size": "Grande",
    "hp": 114,
    "roll": "12d10 + 48",
    "ac": 14,
    "speed": 30,
    "swim": 90,
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 5,
    "wis": 10,
    "cha": 8,
    "resistances": "Ácido; Concussão, Perfurante, e Cortante de ataques não-mágicos",
    "immunities": "Veneno",
    "conditionImmunities": "Exausto, Agarrado, Paralizado, Petrificado, Envenenado, Caído, Impedido, Inconsciente",
    "senses": "Visão no escuro 60 ft.",
    "passive": 10,
    "languages": "Aquan",
    "cr": "5 ",
    "traits": [
      {
        "name": "Forma de Água",
        "text": "O elemental pode entrar no espaço de uma criatura hostil e ficar parado nele. Ele pode se mover através de um espaço de até 1 inch de espessura sem se espremer.."
      },
      {
        "name": "Congelar",
        "text": "Se o elemental sofrer dano de frio, ele congela parcialmente; seu deslocamento é reduzido em 20 ft até o final do seu próximo turno."
      }
    ],
    "actions": [
      {
        "name": "Ataques múltiplos",
        "text": "O elemental realiza dois ataques de pancada."
      },
      {
        "name": "Pancada",
        "text": "Ataque corpo-a-corpo com arma: +7 para atingir, alcance 5 ft., um alvo. Acerto: 13 (2d8 + 4) dano de concussão."
      },
      {
        "name": "Engolfar (Recarrega 4–6)",
        "text": "Cada criatura no espaço do elemental deve realizar um teste de resistência de Força CD 15. Se falhar, um alvo sofre 13 (2d8 + 4) de dano de concussão. Caso ele seja Grande ou menor, ele também fica agarrado (CD 14 para escapar). Até o agarrão acabar, o alvo fica impedido e incapaz de respirar a não ser que possa respirar na água. Se o teste de resistência for bem sucedido, o alvo é empurrado para fora do espaço do elemental. O elemental pode agarrar uma criatura Grande ou duas Médias ou menores ao mesmo tempo. No início de cada turno do elemental, cada criatura agarrada por ele sofre 13 (2d8 + 4) de dano de concussão. Uma criatura a até 1,5 metro do elemental pode puxar uma criatura ou objeto para fora dele ao usar uma ação para realizar um teste de Força CD 14 bem sucedido."
      }
    ],
    "environments": ["Coastal", "Pântano", "Underwater"]
  }
]

export default beasts