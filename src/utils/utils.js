function validateProfile(values) {
  const { name, about } = values;
  const errors = {};

  if (!name) {
    errors.name = 'Поле не может быть пустым';
  }

  if (name.length > 0 && name.length < 2) {
    errors.name = 'Минимальное количество символов: 2';
  }

  if (name.length > 40) {
    errors.name = 'Максимальное количество символов: 40';
  }

  if (!about) {
    errors.about = 'Поле не может быть пустым';
  }

  if (about.length > 0 && about.length < 2) {
    errors.about = 'Минимальное количество символов: 2';
  }

  if (about.length > 200) {
    errors.about = 'Максимальное количество символов: 200';
  }

  return errors;
}

function validateCard(values) {
  const { name, link } = values;
  const errors = {};

  if (!name) {
    errors.name = 'Поле не может быть пустым';
  }

  if (name.length > 0 && name.length < 2) {
    errors.name = 'Минимальное количество символов: 2';
  }

  if (name.length > 40) {
    errors.name = 'Максимальное количество символов: 40';
  }

  if (!link) {
    errors.link = 'Поле не может быть пустым';
  }
  const url = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (link.length > 0 && !url.test(link)) {
    errors.link = 'Укажите url-адрес';
  }

  return errors;
}

export { validateProfile, validateCard };
