let notes = [
    { id: 1, title: 'Nota 1', text: 'Texto de la nota 1', realizada: false },
    { id: 2, title: 'Nota 2', text: 'Texto de la nota 2', realizada: true }
];
let idGlobal = 2;

function pintarNotas() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    const textoFiltro = document.getElementById('search-text').value;
    const realizadasFiltro = document.getElementById('filter-completed').checked;
    const filteredNotes = filtrarNotas(notes, textoFiltro, realizadasFiltro);

    if (filteredNotes.length === 0) {
        notesContainer.innerHTML = '<p>No hay notas para mostrar</p>';
        return;
    }

    let row;
    filteredNotes.forEach((note, index) => {
        if (index % 4 === 0) {
            row = document.createElement('div');
            row.className = 'row mb-3';
            notesContainer.appendChild(row);
        }

        const col = document.createElement('div');
        col.className = 'col-md-3'; // 3 columnas de 12 (4 tarjetas por fila)
        col.innerHTML = `
            <div id="note-${note.id}" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${note.title}</h5>
                    <p class="card-text ${note.realizada ? 'tachado' : ''}">${note.text}</p>
                    <button class="btn btn-danger" onclick="borrarNota(${note.id})">Borrar Nota</button>
                    <input type="checkbox" ${note.realizada ? 'checked' : ''} onclick="marcarRealizada(${note.id})">
                </div>
            </div>
        `;
        row.appendChild(col);
    });
}



document.getElementById('saveBtn').addEventListener('click', function() {
    const title = document.getElementById('note-title').value;
    const text = document.getElementById('note-text').value;
    if (title && text) {
        agregarNota(title, text);
        pintarNotas();
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
});

document.getElementById('search-text').addEventListener('input', pintarNotas);
document.getElementById('filter-completed').addEventListener('change', pintarNotas);

function agregarNota(title, text) {
    notes.push({ id: ++idGlobal, title, text, realizada: false });
}

function borrarNota(id) {
    notes = notes.filter(note => note.id !== id);
    pintarNotas();
}

function marcarRealizada(id) {
    const note = notes.find(note => note.id === id);
    if (note) {
        note.realizada = !note.realizada;
        const noteCard = document.getElementById(`note-${id}`);
        const noteText = noteCard.querySelector('.card-text');
        if (note.realizada) {
            noteText.classList.add('tachado');
        } else {
            noteText.classList.remove('tachado');
        }
    }
}


function filtrarNotas(notes, texto, realizadas) {
    return notes.filter(note => {
        const textoCoincide = note.title.toLowerCase().includes(texto.toLowerCase()) || note.text.toLowerCase().includes(texto.toLowerCase());
        const estadoCoincide = realizadas ? note.realizada : true;
        return textoCoincide && estadoCoincide;
    });
}

pintarNotas();
