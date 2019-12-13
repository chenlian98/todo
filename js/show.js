
import { getQuery, myAjax, $} from './tools'

function getOne() {
  myAjax({
    method: 'GET',
    url: `http://localhost:3000/todo/${getQuery('objectId')}`,
  }).then(res => {
    const { id, title } = res.data

    $('.form-group input[type=text]').value = title
    $('button[type=submit]').setAttribute('data-id', id)
  })
}

getOne()


$('button[type=submit]').addEventListener('click', function () {
  // console.log(this.getAttribute('data-id'))
  myAjax({
    method: 'PUT',
    url: `http://localhost:3000/todo/${getQuery('objectId')}`,
    data: {
      title: $('.form-group input[type=text]').value
    }
  }).then(() => {
    getOne()
    location.href = 'index.html'
  })
})
