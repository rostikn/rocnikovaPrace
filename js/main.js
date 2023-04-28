
const btn1 = document.querySelector('#btn-1');
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

function startGame() {

  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
    textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOptions(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)

    }
  })
}

function showOptions(option) {
  return true
}




function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Vítej ve hře nadějný hráči, myslíš si, že dokážeš dohrát tuto hru až do konce?',
    options: [
      {
        text: 'Ano',
        nextText: 2
      },
      {
        text: 'Ne',
        nextText: 3
      },
      {
        text: 'Asi Ano',
        nextText: 4
      },
      {
        text: 'Asi ne',
        nextText: 4
      }]
  },









  {
    id: 2,
    text: 'Líbí se mi tvoje odvaha, ale nebuď zbytečně namyšlený.',
    options: [
      {
        text: 'Zpět',
        nextText: 1
      },]
  },







  {
    id: 3,
    text: 'Měl by jsi trochu přidat té odvahy, takhle tě tam pustit nemohu.',
    options: [
      {
        text: 'Zpět',
        nextText: 1
      }]
  },





  {
    id: 4,
    text: 'Konečně vyvážená odpověď.',
    options: [
      {
        text: 'Hraj',
        nextText: 5
      }]
  },





  {
    id: 5,
    text: 'Po dvanácti hodinové směně jsi šel unavený domů, když v tom jsi narazil na podivuhodnou knihu.',
    options: [
      {
        text: 'Seber ji',
        nextText: 6
      },
      {
        text: 'Kopni do ní',
        nextText: 7
      },
      {
        text: 'Pokřačuj na cestě domů a knihy si nevšímej',
        nextText: 8
      },]
  },





  {
    id: 6,
    text: 'Knihu jsi sebral, a podle google překladače jsi zjistil, že se jmenuje svět čtyř zbraní.',
    options: [
      {
        text: 'Otevři ji',
        nextText: 7
      },
      {
        text: 'Odlož ji zpátky na zem a jdi domů',
        nextText: 8
      },
      {
        text: 'Knihu si vezmi domů',
        nextText: 9
      },]
  },




  {
    id: 7,
    text: 'Kniha se otevřela a nadpřirozenou silou tě vtáhla dovnitř.',
    options: [
      {
        text: 'dále',
        nextText: 10
      },]
  },




  {
    id: 8,
    text: 'Došel jsi domů a dožil jsi svůj nudný život v nejistotě jaké tajemství mohla ta kniha schovávat.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }]
  },




  {
    id: 9,
    text: 'Došel jsi domů a šel jsi si lehnout. O druhé hodině ranní tě probudil nějaký rachot a šel jsi se podívat co to bylo. Zjistil jsi že to jde z knihy.',
    options: [
      {
        text: 'Otevři ji, a podívej se proč z ní jdou zvuky',
        nextText: 7
      },
      {
        text: 'Někam ji zavři',
        nextText: 11
      },]
  },





  {
    id: 10,
    text: 'Silné světlo ti ozářilo oči a najednou jsi se ocitl mezi stovkami lidí se zvláštním štítem na ruce. Před tebou se udělal průchod kde na konci seděl král na svém velkém trůně vyzdobeném zlatem.',
    options: [
      {
        text: 'Jdi za králem',
        nextText: 12
      },
      {
        text: 'Prohlédni si své okolí',
        nextText: 13
      },
      {
        text: 'Začni křičet',
        nextText: 14
      },]
  },





  {
    id: 11,
    text: 'Cestou do sklepa jsi zakopl a kniha se otevřela.',
    options: [
      {
        text: 'dále',
        nextText: 10
      },]
  },




  {
    id: 12,
    text: 'Došel jsi za králem a ten ti pověděl že jsi nebyl přiveden do jejich světa jen tak.',
    options: [
      {
        text: 'Zeptej se co se děje',
        nextText: 15
      },
      {
        text: 'Rozhlídni se okolo',
        nextText: 16
      }]
  },





  {
    id: 13,
    text: 'Při tom jak jsi se rozhlédl, tak jsi zjistil že se nacházíš v nějakém hradě kde na stropě jsou zakresleny tři zbraně, a štít podobný jako ten co máš na ruce.',
    options: [
      {
        text: 'Jdi za králem',
        nextText: 12
      }]
  },



  {
    id: 14,
    text: 'Začal jsi křičet a popravili tě za špatné chování.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      },]
  },




  {
    id: 15,
    text: 'Zeptal jsi se krále co se děje, ale odpověď přišla od muže s mečem. "Očividně jsme se dostali do jiného světa, nevidíš že tohle není náš domov".Král dodal "Ano svolali jsme vás mistry hlavních zbraní aby jste nám pomohli zachránit náš svět před agresory z jiných světů".',
    options: [
      {
        text: 'dále',
        nextText: 17
      },

    ]
  },




  {
    id: 16,
    text: 'Pečlivě jsi se rozhlédl a zjistil jsi, že vedle tebe stojí tři muži, jeden z nich drží meč, druhý kopí a třetí luk.',
    options: [
      {
        text: 'Zeptej se co se děje',
        nextText: 15
      },
    ]
  },




  {
    id: 17,
    text: '"Byli jste zvoleni zástupci našich symbolů boje, meč, kopí, luk a bohužel i štít, každý máte připravený pokoj se základním vybavením" odvětil král. ',
    options: [
      {
        text: 'Jdi do svého pokoje',
        nextText: 18
      }
    ]
  },




  {
    id: 18,
    text: '"Po cestě jsi potkal mladou dívku schovávajíc se ve stínech která ti pověděla ať utečeš co nejrychleji mužeš. Tebe to ani neotřáslo a šel jsi furt do svého pokoje. ',
    options: [
      {
        text: 'Další',
        nextText: 19
      }
    ]
  },



  {
    id: 19,
    text: 'Po přibližně třech hodinách ti někdo zaklepal na dveře. Šel jsi otevřít a za dveřmi stála úchvatná žena. ',
    options: [
      {
        text: 'Zeptej se co potřebuje',
        nextText: 20
      },
      {
        text: 'pozvi ji dovnitř',
        nextText: 21
      },

    ]
  },




  {
    id: 20,
    text: 'Zeptal jsi se co potřebuje a žena odvětila "chtěla jsem se na tebe podívat rytíři štítu, každý z vás dostal část peněz na vybrání pro vás potřebného vybavení, a jelikož se tu vyznám, tak bych ti mohla pomoct s výběrem". Poté co tuto větu dořekla tak se na tebe začala opírat a svádět tě. ',
    options: [
      {
        text: 'Další',
        nextText: 22
      },


    ]
  },





  {
    id: 21,
    text: 'Pozval jsi ji do tvého pokoje a začali se dít opravdu nekalé věci, ale došlo ti že je to špatně.',
    options: [
      {
        text: 'Pošli ji pryč',
        nextText: 22
      },
      {
        text: 'Řekni že je to špatně, ale pokračuj dále.',
        nextText: 22
      },
      
      ]   
  },






  {
    id: 22,
    text: 'Druhý den po probuzení jsi zjistil že ti chybí všechno vybavení a všechny peníze co jsi dostal od krále jen štít na ruce ti zůstal ',
    options: [
      {
        text: 'Běž hledat tu ženu z předchozího večera',
        nextText: 23
      },
      {
        text: 'Běž hledat pomoc',
        nextText: 23
      },
      
      ]
  },




  {
    id: 23,
    text: 'Po ne zas tak usilovném hledání jsi viděl schromáždění lidí a vojáky kteří se po tobě rozeběhli a křičeli ať zastavíš.',
    options: [
      {
        text: 'Nech se zatknout',
        nextText: 24
      },
      {
        text: 'Uteč',
        nextText: 25
      },
      
      ]
  },




  {
    id: 24,
    text: 'Po tom co tě ostraha zatkla tak tě odvedli k soudu kde byla žena z toho prvního večera a vykládala ostatním hrdinům jak jsi ji zneužil atd.. Hned ti došlo že to byla past a že to na tebe nastražili. teď je proti tobě celé království.',
    options: [
      {
        text: 'Potvrď to co říká',
        nextText: 26
      },
      {
        text: 'Řekni jim pravdu',
        nextText: 26
      },
      
      ]
  },






  {
    id: 25,
    text: 'Podařilo se ti utéct, ale nenašel jsi si žádné místo na spaní a tak jsi šel spát pod stodolou. Když jsi usínal, tak jsi zaslechl že jsi znesvětil královu dceru a že je teď po tobě pátrání s velkou odměnou ',
    options: [
      {
        text: 'Zabij se',
        nextText: -1
      },
      {
        text: 'Uteč z království a připrav se na čas kdy se vrátíš a pomstíš se za tuhle zradu',
        nextText: 27
      },
      
      ]
  },




  {
    id: 26,
    text: 'Ať jsi jim povídal co jsi chtěl tak tě popravili ',
    options: [
      {
        text: 'K předchozímu důležitému rozhodnutí',
        nextText: 23
      },
      {
        text: 'Začni uplně znova',
        nextText: -1
      },
      
      ]
  },





  {
    id: 27,
    text: 'Děkuji za hraní mé hry, toto je prozatimní konec.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      },
      
      
      ]
  },







]

btn1.onclick = () => {
  myFunction();


}


btn1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('/res/img/oldpaper.png')"
})



function myFunction() {

  const element = document.getElementById("nadpis");
  element.remove();
  {

    const element = document.getElementById("btn-1");
    element.remove();

  }
  {

    let x = document.getElementById("dis");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }

  }

}




startGame()







