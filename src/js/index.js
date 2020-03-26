import '../css/app.css'
import swiper from './swiper.js'
swiper()

import {config, dom, library} from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {faTwitterSquare, faInstagramSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitterSquare,faInstagramSquare,faFacebookSquare)

dom.i2svg()