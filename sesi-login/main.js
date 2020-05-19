const username = $("#username")
const password = $("#password")
const btnMasuk = $("#btnMasuk")

const loginInfo = {
  username: "marzuki",
  password: "marzuki"
}

btnMasuk.click(() => {
  if (username === null && password === null) {
    alert('Bidang tidak boleh kosong!');
  } else {
    if (username !== loginInfo.username || password !== loginInfo.password) {
      alert('Login gagal, username atau password salah')
    } else {
      document.location.href = 'dashboard.html'
    }
  }
})