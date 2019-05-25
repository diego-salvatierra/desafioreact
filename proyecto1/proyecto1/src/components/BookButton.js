import React from 'react'
import 'bulma/css/bulma.css'


const BookButton = ({read, id, onRead, killBook, changeBook}) => {
    // If book has been read
    if (read) {
        return (
            <div className='tile'>
            <div className='box'>Read</div>
            <button className="button is-danger is-rounded" onClick={() => killBook()}>Discard it</button>
            <button className="button is-info is-rounded" onClick={() => changeBook()}>Edit info</button>
            </div>
        )
    }   
    // If book has not been read
    else {
        return (
        <div className='tile'>
            <div className='box'>Not Read</div>
            {console.log("onRead is ", onRead)}
            {console.log("key is ", id)}
            <br></br>
            <button className="button is-success is-rounded" onClick={() => onRead()}>I read it!</button>
            <button className="button is-danger is-rounded" onClick={() => killBook()}>Discard it</button>
            <button className="button is-info is-rounded" onClick={() => changeBook()}>Edit info</button>
        </div>              
    )}
}

export default BookButton

// Bulma Modal Code

document.addEventListener('DOMContentLoaded', function () {

    // Modals
  
    var rootEl = document.documentElement;
    var $modals = getAll('.modal');
    var $modalButtons = getAll('.modal-button');
    var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
    if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          rootEl.classList.add('is-clipped');
          $target.classList.add('is-active');
        });
      });
    }
  
    if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
          closeModals();
        });
      });
    }
  
    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeModals();
      }
    });
  
    function closeModals() {
      rootEl.classList.remove('is-clipped');
      $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }
  
    // Functions
  
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
  
  });