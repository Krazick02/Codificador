const {
    createApp
} = Vue


const myApp = createApp({
    data() {
        return {

            abc: [
                ['A', 0],
                ['B', 1],
                ['C', 2],
                ['D', 3],
                ['E', 4],
                ['F', 5],
                ['G', 6],
                ['H', 7],
                ['I', 8],
                ['J', 9],
                ['K', 10],
                ['L', 11],
                ['M', 12],
                ['N', 13],
                ['Ñ', 14],
                ['O', 15],
                ['P', 16],
                ['Q', 17],
                ['R', 18],
                ['S', 29],
                ['T', 20],
                ['U', 21],
                ['V', 22],
                ['W', 23],
                ['X', 24],
                ['Y', 25],
                ['Z', 26]
            ],
            abc8: [
                ['A', 0],
                ['B', 1],
                ['C', 2],
                ['D', 3],
                ['W', 4],
                ['X', 5],
                ['Y', 6],
                ['Z', 7]
            ],
            aei: [
                ['A', 0],
                ['E', 1],
                ['I', 2],
                ['O', 3],
                ['U', 4]
            ],
            resultado: '',
            clave: '',
            ingresado: [],
            ingresadoClave: [],
            encriptado: [],
            errorEntrada: false,
            errorClave: false,
            cifrado: '',
            entrada: '',
            url: '',
            regex: /^[a-zA-ZñÑ]*$/,
            funcion: 'encriptar',
            metodo: '27'

        }
    },
    methods: {
        clean() {
            this.clave = ''
            this.entrada = ''
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
        },
        ver27() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 27; y++) {
                    if (this.abc[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.abc[y][1])
                    }
                }
            }
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 27; y++) {
                    if (this.abc[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.abc[y][1])
                    }
                }
            }

            for (var x = 0; x < this.ingresado.length; x++) {
                var contador = 0
                for (var y = 0; y < this.abc.length; y++) {
                    if (((this.ingresado[x] + this.ingresadoClave[x]) % 27) == this.abc[y][1]) {
                        this.encriptado[this.encriptado.length] = this.abc[y][0]
                        break
                    }
                    contador++
                }

                this.resultado += this.abc[contador][0]
                contador = 0
            }
        },
        ver8() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 8; y++) {
                    if (this.abc8[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.abc8[y][1])
                    }
                }
            }
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 8; y++) {
                    if (this.abc8[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.abc8[y][1])
                    }
                }
            }

            for (var x = 0; x < this.ingresado.length; x++) {
                var contador = 0
                for (var y = 0; y < this.abc8.length; y++) {
                    if (((this.ingresado[x] + this.ingresadoClave[x]) % 8) == this.abc8[y][1]) {
                        this.encriptado[this.encriptado.length] = this.abc8[y][0]
                        break
                    }
                    contador++
                }

                this.resultado += this.abc8[contador][0]
                contador = 0
            }
        },
        ver5() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 5; y++) {
                    if (this.aei[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.aei[y][1])
                    }
                }
            }
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 5; y++) {
                    if (this.aei[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.aei[y][1])
                    }
                }
            }

            for (var x = 0; x < this.ingresado.length; x++) {
                var contador = 0
                for (var y = 0; y < this.aei.length; y++) {
                    if (((this.ingresado[x] + this.ingresadoClave[x]) % 5) == this.aei[y][1]) {
                        this.encriptado[this.encriptado.length] = this.aei[y][0]
                        break
                    }
                    contador++
                }

                this.resultado += this.aei[contador][0]
                contador = 0
            }
        },
        verD27() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            console.log(this.entrada)
            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 27; y++) {
                    if (this.abc[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.abc[y][1])
                    }
                }
            }
            console.log(this.ingresado)
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 27; y++) {
                    if (this.abc[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.abc[y][1])
                    }
                }
            }
            console.log(this.ingresadoClave)

            for (var x = 0; x < this.ingresado.length; x++) {
                for (var y = 0; y < this.abc.length; y++) {
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 27)) == this.abc[y][1]) {
                        this.encriptado[this.encriptado.length] = this.abc[y][0]
                        break
                    }
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 27)) < 0) {
                        if ((27 - (Math.abs(this.ingresado[x] - this.ingresadoClave[x]) % 27)) == this.abc[y][1]) {
                            this.encriptado[this.encriptado.length] = this.abc[y][0]
                            break
                        }
                    }
                }
                this.resultado += this.encriptado[this.encriptado.length - 1]
            }
        },
        verD8() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            console.log(this.entrada)
            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 8; y++) {
                    if (this.abc8[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.abc8[y][1])
                    }
                }
            }
            console.log(this.ingresado)
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 8; y++) {
                    if (this.abc8[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.abc8[y][1])
                    }
                }
            }
            console.log(this.ingresadoClave)

            for (var x = 0; x < this.ingresado.length; x++) {
                for (var y = 0; y < this.abc8.length; y++) {
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 8)) == this.abc8[y][1]) {
                        this.encriptado[this.encriptado.length] = this.abc8[y][0]
                        break
                    }
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 8)) < 0) {
                        if ((8 - (Math.abs(this.ingresado[x] - this.ingresadoClave[x]) % 8)) == this.abc8[y][1]) {
                            this.encriptado[this.encriptado.length] = this.abc8[y][0]
                            break
                        }
                    }
                }
                this.resultado += this.encriptado[this.encriptado.length - 1]
            }
        },
        verD5() {
            this.resultado = ''
            this.ingresado = []
            this.ingresadoClave = []
            this.encriptado = []
            this.cifrado = ''
            var ent = this.clave.length
            var text = this.clave
            for (var x = this.clave.length; x < this.entrada.length; x++) {
                for (var y = 0; y < ent; y++) {
                    this.clave += text[y]
                    if (this.entrada.length == this.clave.length) {
                        break
                    }
                }
                if (this.entrada.length == this.clave.length) {
                    break
                }
            }

            console.log(this.entrada)
            for (var x = 0; x < this.entrada.length; x++) {
                for (var y = 0; y < 5; y++) {
                    if (this.aei[y][0] == this.entrada[x].toUpperCase()) {
                        this.ingresado[this.ingresado.length] = (this.aei[y][1])
                    }
                }
            }
            console.log(this.ingresado)
            for (var x = 0; x < this.clave.length; x++) {
                for (var y = 0; y < 5; y++) {
                    if (this.aei[y][0] == this.clave[x].toUpperCase()) {
                        this.ingresadoClave[this.ingresadoClave.length] = (this.aei[y][1])
                    }
                }
            }
            console.log(this.ingresadoClave)

            for (var x = 0; x < this.ingresado.length; x++) {
                for (var y = 0; y < this.aei.length; y++) {
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 5)) == this.aei[y][1]) {
                        this.encriptado[this.encriptado.length] = this.aei[y][0]
                        break
                    }
                    if ((((this.ingresado[x] - this.ingresadoClave[x]) % 5)) < 0) {
                        if ((5 - (Math.abs(this.ingresado[x] - this.ingresadoClave[x]) % 5)) == this.aei[y][1]) {
                            this.encriptado[this.encriptado.length] = this.aei[y][0]
                            break
                        }
                    }
                }
                this.resultado += this.encriptado[this.encriptado.length - 1]
            }
        },
        let27() {
            this.metodo = '27'
            this.regex = /^[a-zA-ZñÑ]*$/
            this.clean()
        },
        let8() {
            this.metodo = '8'
            this.regex = /^[abcdwxyzABCDWXYZ]*$/
            this.clean()
        },
        let5() {
            this.metodo = '5'
            this.regex = /^[aeiouAEIOU]*$/
            this.clean()
        },
        validar() {
            // if (!this.regex.test(this.entrada) || !this.regex.test(this.clave)) {
            //     Swal.fire(
            //         'Error!',
            //         'No puedes ingresar numeros o simbolos :c!',
            //         'warning'
            //     )
            // }
        },
        info() {
            Swal.fire(
                'No puedes ingresar numeros o simbolos :c!',
                'warning'
            )
        }


    },
    mounted() {
        this.url = 'https://d5zj069sildq7.cloudfront.net/wp-content/uploads/2015/03/f.jpg'
    }
}).mount('#app')