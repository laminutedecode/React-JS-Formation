import './emojiPicker.scss';
import {forwardRef, useState, useRef, useEffect} from 'react'
import {data as emojiList} from './data'
import EmojiSearch from './emojiSearch';
import EmojiButton from './emojiButton';

export function EmojiPicker(props, inputRef){

const [isOpen, setIsOpen] = useState(false);

const [emojis, setEmojis] = useState(emojiList);


const containerRef = useRef(null);


function handleClickOpen(){
  setIsOpen(!isOpen)
}

useEffect(() => { // Utilise le hook useEffect pour effectuer une action lors du rendu initial.
  window.addEventListener('click', (e) => { // Ajoute un écouteur d'événement au clic sur la fenêtre.
    if (!containerRef.current.contains(e.target)) { // Vérifie si le clic n'est pas à l'intérieur de containerRef.
      setIsOpen(false); // Ferme le sélecteur d'emoji.
      setEmojis(emojiList); // Réinitialise la liste des emojis.
    }
  });
}, []);

function handleSearch(e) { // Définit une fonction pour gérer la recherche d'emoji.
  e.preventDefault(); // Empêche le comportement par défaut du formulaire.
  const value = e.target.value.toLocaleLowerCase(); // Récupère la valeur de la recherche en minuscules.
  if (!!value) { // Vérifie si une recherche a été effectuée.
    const search = emojiList.filter((emoji) => { // Filtre la liste des emojis en fonction de la recherche.
      return (
        emoji.name.toLowerCase().includes(value) || (Array.isArray(emoji.keywords) && emoji.keywords.some(keyword => keyword.toLowerCase().includes(value)))
      );
    });
    setEmojis(search); // Met à jour la liste des emojis avec les résultats de la recherche.
  } else {
    setEmojis(emojiList); // Réinitialise la liste des emojis si aucune recherche n'est effectuée.
  }
}




function handleEmoji(emoji) { // Définit une fonction pour gérer le clic sur un emoji.
  const cursorPos = inputRef.current.selectionStart; // Récupère la position du curseur dans l'élément d'entrée.
  const text = inputRef.current.value; // Récupère le texte actuel dans l'élément d'entrée.
  const prev = text.slice(0, cursorPos); // Récupère le texte avant la position du curseur.
  const next = text.slice(cursorPos); // Récupère le texte après la position du curseur.

  inputRef.current.value = prev + emoji.symbol + next; // Insère l'emoji à la position du curseur.
  inputRef.current.selectionStart = cursorPos + emoji.symbol.length; // Met à jour la position du curseur.
  inputRef.current.selectionEnd = cursorPos + emoji.symbol.length; // Met à jour la position de fin de sélection.
  inputRef.current.focus(); // Met le focus sur l'élément d'entrée.
}


  return (
    <div  ref={containerRef}>
     <button className='btn-emoji'  type="button" onClick={handleClickOpen}>😀 ...</button>

     {isOpen ? <div>
    <EmojiSearch onSearch={handleSearch} />
    <div className='listEmoji'>
      {emojis.map((emoji) => (
        <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleEmoji} />
      ))}
    </div>
  </div> : ""}
    </div>
  )
}

export default forwardRef(EmojiPicker) 
// La fonction forwardRef permet d'exposer la référence inputRef à l'extérieur du composant EmojiPicker, ce qui permet à un parent de contrôler l'élément d'entrée dans lequel les emojis sont insérés.