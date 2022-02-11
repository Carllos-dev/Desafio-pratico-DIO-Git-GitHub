'use strict';

const images = [
    { 'id': '1', 'url':'./img/Petro1.jpg' },
    { 'id': '2', 'url':'./img/Petro2.jpg' },
    { 'id': '3', 'url':'./img/Petro3.jpeg' },
    { 'id': '4', 'url':'./img/Petro4.jpg' },
    { 'id': '5', 'url':'./img/Petro5.jpg' },
    { 'id': '6', 'url':'./img/Petro6.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);
document.querySelector('#previous').addEventListener('click', previous);