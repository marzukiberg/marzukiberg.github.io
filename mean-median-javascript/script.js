const numberList = document.getElementById('numberList')
const result = document.getElementById('result')

const input = document.getElementById('input')
const add = document.getElementById('add')
const resetAll = document.getElementById('resetAll')

let initialResult = []

const calc = () => {
  let total = 0
  let arrLength = initialResult.length
  initialResult.forEach(element => {
    total += element
  })
  const mean = total / arrLength

  const arrLengthNew = arrLength + 1

  const compare = (a, b) => a - b
  const urut = initialResult.sort(compare)
  let firstIndex = 0
  let secondIndex = 0
  let medianIndex = 0
  let median = 0
  if (arrLengthNew % 2 === 1) {
    const first = (arrLength / 2) - 1
    const second = first + 1
    firstIndex = urut[first]
    secondIndex = urut[second]

    median = (secondIndex + firstIndex) / 2
  } else {
    medianIndex = (arrLengthNew / 2) - 1
    median = urut[medianIndex]
  }

  if (arrLength === 0) {
    result.innerHTML = ''
  } else {
    result.innerHTML = `
      <label id='addMore' class='btn btn-primary btn-sm btn-block' for='input'>Tambah Angka Lagi</label>
      <div class='alert alert-warning text-left'>
       <span>Angka setelah diurutkan:<br /> ${urut.join(', ')}</span>
       <br />
       <span>Jumlah index: ${arrLength}</span>
       <br />
       <br />
       <span>Mean: ${mean.toFixed(2)}</span>
        <br />
       <strong>Penyelesaian: ${'(' +initialResult.join('+')} / ${arrLength}</strong>
       <br />
       <span>Menghitung Mean/Nilai rata-rata dapat dilakukan dengan menjumlahkan semua angka kemudian dibagi dengan berapa banyak angka yang ada.
       <br />
       <br />
       <span>Median: ${median}</span>
       <br />
       <strong>Penyelesaian: ${arrLength % 2 === 1 ? arrLengthNew +' / 2 (urutan ke-' +(medianIndex +1)+') = '+median : '('+firstIndex+'+'+secondIndex+') / 2'}</strong>
       <br />
       <span>Diketahui Jumah data adalah
         ${arrLength % 2 === 1? 'Ganjil, kita perlu mengurutkan data terlebih dahulu, kemudian kita ambil angka pada posisi tengah, pada data angka tengah terdapat pada urutan ke <strong>'+(medianIndex+1)+'</strong>': 'Genap, kita perlu mengurutkan data terlebih dahulu, kemudian kita ambil dua angka bagian kiri dan kanan pada posisi tengah, jumlahkan dua angka tersebut kemudian bagikan dengan 2'}
       </span>
      </div>
  `
  }
}

const display = () => {
  if (initialResult.length === 0) {
    numberList.innerText = 'Belum ada angka untuk dihitung';
  } else {
    const separated = initialResult.join(', ')
    numberList.innerText = separated;
    calc()
  }
}

add.addEventListener('click', () => {
  if (input.value == '') {
    const alertBox = document.getElementById('alert')
    alertBox.innerHTML = '<div class="alert alert-danger mt-3">Tolong masukkan angka!</div>'
    setTimeout(() => {
      alertBox.innerHTML = ''
    }, 2000)
  } else {
    initialResult.push(parseInt(input.value))
    input.value = ''
    window.location.href = '#result'
    display()
  }
})

resetAll.addEventListener('click', () => {
  initialResult = []
  result.innerHTML = ''
  display()
})

display()