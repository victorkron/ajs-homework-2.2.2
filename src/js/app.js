// TODO: write your code here

export default function getSpecialAttack(obj) {
  const resArr = [];


  obj.special.forEach((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;

    resArr.push(
      {
        id,
        name,
        description,
        icon,
      },
    );
  });


  return resArr;
}
