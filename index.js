// code showing how I originally generated the puppy-fied word bank
const wordBank = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";

const ipsuruff = () => {
    let wordArray = wordBank.split(" ");
        console.log(wordArray.length);
        let displayText = [];
        for(let i = 0; i < wordArray.length; i++){
            displayText.push(wordArray[i]);
        }


        let barkText = [];
        for(let i = 0; i < displayText.length; i++){
            let barkItem = displayText[i].replace(displayText[i].charAt(0), "bark");  
            barkText.push(barkItem);
        }
        let ruffText = [];
        for(let i = 0; i < displayText.length; i++){
            let ruffItem = displayText[i].replace(displayText[i].charAt(displayText[i].length - 1), "ruff");
            ruffText.push(ruffItem);
        }
        let puppyWordBank = barkText.concat(ruffText);
        return puppyWordBank;
    }

// The actual work bank
const puppyWordBank = ["barkorem", "barkpsum", "barkolor", "barkit", "barkmet", "barkonsectetur", "barkdipiscing", "barklit", "barked", "barko", "barkiusmod", "barkempor", "barkncididunt", "barkt", "barkabore", "barkt", "barkolore", "barkagna", "barkliqua", "barkt", "barknim", "barkd", "barkinim", "barkeniam", "barkuis", "barkostrud", "barkxercitation", "barkllamco", "barkaboris", "barkisi", "barkt", "barkliquip", "barkx", "barka", "barkommodo", "barkonsequa", "barkuis", "barkute", "barkrure", "barkolor", "barkn", "barkeprehenderit", "barkn", "barkoluptate", "barkelit", "barksse", "barkillum", "barkolore", "barku", "barkugiat", "barkulla", "barkariatur", "barkxcepteur", "barkint", "barkccaecat", "barkupidatat", "barkon", "barkroident", "barkunt", "barkn", "barkulpa", "barkui", "barkfficia", "barkeserunt", "barkollit", "barknim", "barkd", "barkst", "barkaborum", "Loreruff", "ipsuruff", "doloruff", "siruff", "ameruff", "consecteturuff", "adipiscinruff", "eliruff", "seruff", "druff", "eiusmoruff", "temporuff", "incididunruff", "uruff", "laborruff", "eruff", "dolorruff", "mruffgna", "ruffliqua", "Uruff", "eniruff", "aruff", "ruffinim", "veniaruff", "quiruff", "nostruruff", "exercitatioruff", "ullamcruff", "laboriruff", "nruffsi", "uruff", "aliquiruff", "eruff", "eruff", "cruffmmodo", "consequruff", "Duiruff", "autruff", "irurruff", "doloruff", "iruff", "reprehenderiruff", "iruff", "voluptatruff", "veliruff", "ruffsse", "cilluruff", "dolorruff", "eruff", "fugiaruff", "nullruff", "paruffiatur", "Excepteuruff", "sinruff", "occaecaruff", "cupidaruffat", "ruffon", "proidenruff", "sunruff", "iruff", "culpruff", "quruff", "officiruff", "deserunruff", "molliruff", "aniruff", "iruff", "esruff", "laboruruff"];

module.exports = function getBarksum(size){
        let bank = puppyWordBank;
        let text = "";
        let sentenceNumber;
        if(size.toUpperCase() === "L"){
            sentenceNumber = 6;
        } else if(size.toUpperCase() === "S"){
            sentenceNumber = 2;
        } else if(size.toUpperCase() ==="M"){
            sentenceNumber = 4;
        } else {
            sentenceNumber = 4;
        }
		for (let j = 0; j < sentenceNumber; j++) {
            let sentence = "";
            let numWords = Math.floor(Math.random() * 6 + 10);
            for (let k = 0; k < numWords; k++) {
                let word = "";
                let wordNum = Math.floor(Math.random() * bank.length);
                word = bank[wordNum];
                if (k !== 0) {
                    sentence += " ";
                }
                sentence += word;
            }
            sentence += ". ";
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
            text += sentence;
    
            
        }
		return text;
    }