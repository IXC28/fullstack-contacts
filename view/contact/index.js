const REGEX_NUMBER = /^[0][42][12][426][0-9]{7}$/;
const REGEX_NAME = /(\b[A-Z]{1}[a-z]{3,}\b\s[A-Z]{1}[a-z]{3,}\w)/;
const numberInput = document.querySelector('#number-input');
const nameInput = document.querySelector('#name-input');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');
const listInputNumber = document.querySelectorAll('#list-input-number');
const listInputName = document.querySelectorAll('#list-input-name');
const inputs = document.querySelectorAll('.inputs');
const list = document.querySelector('#list');
const listItem = document.querySelector('#listItem');
const editBtn = document.querySelector('.edit-btn');
const liContainer = document.querySelector('.li-container');
const editando = document.querySelector('.editando');
const cerrarBtn = document.querySelector('#cerrar-btn');

const Guardar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
Guardar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
Guardar.setAttribute('fill', 'none');
Guardar.setAttribute('viewBox', '0 0 24 24');
Guardar.setAttribute('stroke-width', '1.5');
Guardar.setAttribute('stroke', 'currentColor');
Guardar.setAttribute('class', 'w-6 h-6');
Guardar.setAttribute('class', 'save-icon');

const GuardarSvg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
GuardarSvg.setAttribute('stroke-linecap', 'round');
GuardarSvg.setAttribute('stroke-linejoin', 'round');
GuardarSvg.setAttribute('d', 'M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3');
Guardar.appendChild(GuardarSvg);

const Editar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
Editar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
Editar.setAttribute('fill', 'none');
Editar.setAttribute('viewBox', '0 0 24 24');
Editar.setAttribute('stroke-width', '1.5');
Editar.setAttribute('stroke', 'currentColor');
Editar.setAttribute('class', 'w-6 h-6');
Editar.setAttribute('class', 'edit-icon');

const EditarSvg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
EditarSvg.setAttribute('stroke-linecap', 'round');
EditarSvg.setAttribute('stroke-linejoin', 'round');
EditarSvg.setAttribute('d', 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125');
Editar.appendChild(EditarSvg);


(async () => {
try {
  const { data } = await axios.get('/api/contact', {
    withCredentials: true,
  });

  data.forEach(contact => {
    console.log(contact);
    const li = document.createElement('li');
    li.id = contact.id;
    li.classList.add('listItem');
    li.innerHTML = `
      <button class="delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="delete-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
      <input id="list-input-number" class="inputs" value="${contact.phone}" type="text" readonly>
      <input id="list-input-name" class="inputs" value="${contact.name}" type="text" readonly>
      <button class="edit-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="edit-icon">
              <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
      </button>
      `;

      list.append(li);

    });

} catch (error) {
  
  window.location.pathname = '/login';

}
})();

let inputValidation1 = false;
let inputValidation2 = false;

let inputValidation3 = false;
let inputValidation4 = false;

const validateInputForm = (input, regexValidation) => {
  if (inputValidation1 && inputValidation2) {
    formBtn.disabled = false;
  } else {
    formBtn.disabled = true;
  }

  if (input.value === '') {
    input.classList.remove('red');
    input.classList.remove('green');
  } else if (regexValidation) {
    input.classList.remove('red');
    input.classList.add('green');
  } else {
    input.classList.remove('green');
    input.classList.add('red');
  }
};

const validateInputEdit = (input, regexValidation) => {
  if (inputValidation3 && inputValidation4) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  if (input.value === '') {
    input.classList.remove('red');
    input.classList.remove('green');
  } else if (regexValidation) {
    input.classList.remove('red');
    input.classList.add('green');
  } else {
    input.classList.remove('green');
    input.classList.add('red');
  }
};

const removeIcons = (li) => {
  const editIcon = li.querySelector('.edit-icon');
  const saveIcon = li.querySelector('.save-icon');
  if (editIcon) {
    editIcon.remove();
  }
  if (saveIcon) {
    saveIcon.remove();
  }
};
nameInput.addEventListener('input', e => {
  inputValidation1 = REGEX_NAME.test(e.target.value);
  validateInputForm(nameInput, inputValidation1);
});

numberInput.addEventListener('input', e => {
  inputValidation2 = REGEX_NUMBER.test(e.target.value);
  validateInputForm(numberInput, inputValidation2);
});


form.addEventListener('submit', async e => {
  e.preventDefault();

  const { data } = await axios.post('/api/contact', { name : nameInput.value, number: numberInput.value });

  const li = document.createElement('li');
  li.id = data.id;
  li.classList.add('listItem');
  li.innerHTML = `
    <button class="delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="delete-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
    <input id="list-input-number" class="inputs" value="${data.phone}" type="text" readonly>
    <input id="list-input-name" class="inputs" value="${data.name}" type="text" readonly>
    <button class="edit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="edit-icon">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
    </button>
    `;
  list.append(li);

  nameInput.value = '';
  inputValidation1 = false;

  validateInputForm(nameInput);

  numberInput.value = '';
  inputValidation2 = false;

  validateInputForm(numberInput);


});

const getContacts = () => {
  if (localStorage.getItem('list')) {
    list.innerHTML = localStorage.getItem('list');
  }
};
getContacts();


list.addEventListener('click',async e => {
  if (e.target.closest('.delete-btn')) {
    const button = e.target.closest('.delete-btn');
    await axios.delete(`/api/contact/${button.parentElement.id}`)
    button.parentElement.remove();

  }

  if (e.target.closest('.edit-btn')) {
    const button = e.target.closest('.edit-btn');
    const editInput = button.parentElement.children[1];
    const editInput2 = button.parentElement.children[2];

    const validateInputEdit = (input, regexValidation) => {
      if (inputValidation3) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }

      if (input.value === '') {
        input.classList.remove('red');
        input.classList.remove('green');
      } else if (regexValidation) {
        input.classList.remove('red');
        input.classList.add('green');
      } else {
        input.classList.remove('green');
        input.classList.add('red');
      }
    };


    editInput2.addEventListener('input', e => {
      inputValidation3 = REGEX_NAME.test(e.target.value);
      validateInputEdit(editInput2, inputValidation3);
    });

    editInput.addEventListener('input', e => {
      inputValidation3 = REGEX_NUMBER.test(e.target.value);
      validateInputEdit(editInput, inputValidation3);
    });


    if (button.classList.contains('editando')) {

      button.classList.remove('editando');

      removeIcons(button);

      button.appendChild(Editar.cloneNode(true));

      editInput.setAttribute('readonly', 'true');

      editInput2.setAttribute('readonly', 'true');

      editInput.setAttribute('value', editInput.value);

      editInput2.setAttribute('value', editInput2.value);

      editInput.classList.remove('green');
      editInput2.classList.remove('green');
      
    // await axios.patch('/api/contact', { name : editInput2.value, number: editInput.value });

    await axios.patch(`/api/contact/${button.parentElement.id}`, { editName : editInput2.value, editNumber: editInput.value } );


    } else {
      console.log('2');
      removeIcons(button); // creo que aca esta el erro
      button.appendChild(Guardar.cloneNode(true));
      button.classList.add('editando');
      editInput.removeAttribute('readonly');
      editInput2.removeAttribute('readonly');


    }
  }

});
cerrarBtn.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});