import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Sun, Star, Heart, Music, Tv, Mail, Phone, MapPin, ChevronDown, Play, Pause, Volume2 } from 'lucide-react'

// VK Icon Component (Custom SVG since Lucide doesn't have it)
const VKIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.297 4 7.85c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
)

// Yandex Icon Component (Custom SVG)
const YandexIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2.08C6.44 2.08 2.08 6.44 2.08 12.04s4.36 9.96 9.96 9.96 9.96-4.36 9.96-9.96S17.64 2.08 12.04 2.08zm1.86 14.12h-1.96v-4.68h-2.08v4.68H8.12V7.72h1.96v4.28h2.08V7.72h1.96v8.48zm2.24-8.48h1.96v8.48h-1.96V7.72z"/>
  </svg>
)

// Telegram Icon Component (Custom SVG for better styling)
const TelegramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
)

// OK.ru Icon Component
const OKIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.08c-5.46 0-9.92 4.46-9.92 9.92 0 5.46 4.46 9.92 9.92 9.92 5.46 0 9.92-4.46 9.92-9.92 0-5.46-4.46-9.92-9.92-9.92zm0 3.86c1.14 0 2.07.93 2.07 2.07s-.93 2.07-2.07 2.07-2.07-.93-2.07-2.07.93-2.07 2.07-2.07zm4.64 6.22c-.62 1.95-2.43 3.33-4.64 3.33s-4.02-1.38-4.64-3.33c-.13-.41.09-.85.5-.98.41-.13.85.09.98.5.4 1.26 1.57 2.11 2.96 2.11s2.56-.85 2.96-2.11c.13-.41.57-.63.98-.5.41.13.63.57.5.98zm-1.81 3.24c.38.38.38.99 0 1.37l-2.25 2.25c-.19.19-.44.28-.69.28s-.5-.09-.69-.28l-2.25-2.25c-.38-.38-.38-.99 0-1.37.38-.38.99-.38 1.37 0l1.56 1.56 1.56-1.56c.38-.38.99-.38 1.37 0z"/>
  </svg>
)

// Character data
const characters = [
  {
    id: 'tinky',
    name: 'Тинки-Винки',
    color: 'tinky',
    bgGradient: 'from-purple-500 to-violet-700',
    textColor: 'text-purple-400',
    description: 'Самый высокий и старший из телепузиков. Любит нести красную сумочку и танцевать. Его антенна в форме треугольника.',
    traits: ['Высокий', 'Заботливый', 'Любит танцевать'],
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80'
  },
  {
    id: 'dipsy',
    name: 'Дипси',
    color: 'dipsy',
    bgGradient: 'from-green-500 to-emerald-700',
    textColor: 'text-green-400',
    description: 'Носит чёрно-белую шляпу и самая короткая антенна. Любит танцевать и всегда готов к приключениям.',
    traits: ['Весёлый', 'Любит шляпы', 'Танцор'],
    image: 'https://images.unsplash.com/photo-1516636052745-e142aecffd0c?w=400&q=80'
  },
  {
    id: 'laala',
    name: 'Ля-Ля',
    color: 'laala',
    bgGradient: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-400',
    description: 'Жёлтый телепузик с антенной в форме завитка. Любит петь, танцевать и играть с мячом. Всегда рада гостям!',
    traits: ['Певунья', 'Энергичная', 'Дружелюбная'],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80'
  },
  {
    id: 'po',
    name: 'По',
    color: 'po',
    bgGradient: 'from-red-500 to-rose-700',
    textColor: 'text-red-400',
    description: 'Самый маленький и младший телепузик. Обожает кататься на самокате и всегда полон энергии. Его антенна круглая.',
    traits: ['Маленький', 'Скутер', 'Энергия'],
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=400&q=80'
  }
]

// Fun facts
const funFacts = [
  { icon: 'sun', text: 'Съёмки проходили в Англии на настоящем зелёном поле' },
  { icon: 'tv', text: 'Шоу выходит с 1997 года и обожают во всём мире' },
  { icon: 'heart', text: 'Телепузи говорят на языке "телепузи" - он понятен всем детям' },
  { icon: 'music', text: 'Каждая серия длится ровно 25 минут' }
]

function App() {
  const [activeTab, setActiveTab] = useState('all')
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSun, setShowSun] = useState(true)
  const { scrollY } = useScroll()

  const sunY = useTransform(scrollY, [0, 500], [0, 100])
  const sunRotate = useTransform(scrollY, [0, 500], [0, 180])
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSun(false)
      } else {
        setShowSun(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden mobile-safe-container">
      {/* Floating Sun Baby Animation */}
      <AnimatePresence>
        {showSun && (
          <motion.div
            style={{ y: sunY, rotate: sunRotate }}
            className="fixed top-20 right-10 z-40 w-24 h-24 pointer-events-none hidden md:block"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-4xl">👶</div>
              </div>
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-6 bg-yellow-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '50% 50px',
                    transform: `rotate(${i * 45}deg) translateY(-60px)`
                  }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-white/10"
      >
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">ТЕЛЕПУЗИКИ</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors font-semibold">Главная</button>
            <button onClick={() => scrollToSection('characters')} className="text-gray-300 hover:text-white transition-colors font-semibold">Герои</button>
            <button onClick={() => scrollToSection('facts')} className="text-gray-300 hover:text-white transition-colors font-semibold">Факты</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors font-semibold">Контакты</button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPlaying ? 'Пауза' : 'Смотреть'}</span>
          </button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
              Добро пожаловать в мир{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Телепузиков!
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Тинки-Винки, Дипси, Ля-Ля и По приветствуют вас!
              Погрузитесь в волшебный мир детства, веселья и приключений.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('characters')}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                Познакомиться с героями
              </button>
              <button
                onClick={() => scrollToSection('facts')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Интересные факты
              </button>
            </div>

            {/* Character preview circles */}
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
              {characters.map((char, index) => (
                <motion.div
                  key={char.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  onClick={() => scrollToSection('characters')}
                  className="cursor-pointer"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${char.bgGradient} flex items-center justify-center shadow-xl border-4 border-white/20`}>
                    <span className="text-2xl md:text-3xl font-black text-white">
                      {char.name[0]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-400">{char.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('characters')}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">друзья</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Познакомьтесь с каждым Телепузиком поближе. У каждого свой характер, цвет и особенности!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-b ${char.bgGradient} p-1 h-full`}>
                  <div className="bg-slate-900 rounded-[22px] h-full p-6 flex flex-col relative overflow-hidden">
                    {/* Glow effect */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${char.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Character image placeholder with gradient */}
                    <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${char.bgGradient} mb-6 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="text-6xl relative z-10">
                        {char.id === 'tinky' && '💜'}
                        {char.id === 'dipsy' && '💚'}
                        {char.id === 'laala' && '💛'}
                        {char.id === 'po' && '❤️'}
                      </span>
                      {/* Antenna */}
                      <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-white/80`}></div>
                      <div className={`absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/80`}></div>
                    </div>

                    <h3 className={`text-2xl font-black ${char.textColor} mb-3`}>{char.name}</h3>
                    <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{char.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {char.traits.map((trait, i) => (
                        <span
                          key={i}
                          className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${char.bgGradient} bg-opacity-20 text-white border border-white/10`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="facts" className="py-20 px-4 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Интересные <span className="text-yellow-400">факты</span>
            </h2>
            <p className="text-gray-400">Всё, что вы хотели знать о любимом шоу</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  {fact.icon === 'sun' && <Sun className="w-6 h-6 text-white" />}
                  {fact.icon === 'tv' && <Tv className="w-6 h-6 text-white" />}
                  {fact.icon === 'heart' && <Heart className="w-6 h-6 text-white" />}
                  {fact.icon === 'music' && <Music className="w-6 h-6 text-white" />}
                </div>
                <p className="text-lg text-gray-300 font-medium">{fact.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-6xl text-white/10 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-bold text-white italic mb-4 relative z-10">
                Э-о! Привет, Телепузики!
              </p>
              <p className="text-gray-400">— Любимая фраза из шоу</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Присоединяйтесь к веселью!
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Следите за новостями Телепузиков в социальных сетях, делитесь воспоминаниями и находите новых друзей!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  Слушать песни
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-white/10 py-12 px-4 telegram-safe-bottom">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">ТЕЛЕПУЗИКИ</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Фан-сайт, посвящённый любимому детскому шоу. Создано с любовью для поклонников по всему миру.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('characters')} className="hover:text-white transition-colors">Персонажи</button></li>
                <li><button onClick={() => scrollToSection('facts')} className="hover:text-white transition-colors">Факты</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@telepuziki.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links - Russian Focus */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 Телепузики Фан-клуб. Все права защищены.</p>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm mr-2">Мы в соцсетях:</span>

              {/* VK */}
              <motion.a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="VKontakte"
              >
                <VKIcon className="w-5 h-5" />
              </motion.a>

              {/* Telegram */}
              <motion.a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-5 h-5" />
              </motion.a>

              {/* OK.ru */}
              <motion.a
                href="https://ok.ru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Odnoklassniki"
              >
                <OKIcon className="w-5 h-5" />
              </motion.a>

              {/* Yandex Zen or general Yandex */}
              <motion.a
                href="https://dzen.ru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center text-black transition-colors"
                aria-label="Яндекс Дзен"
              >
                <YandexIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Legal info for Russia */}
          <div className="mt-8 text-center text-gray-600 text-xs">
            <p>Это фан-сайт, созданный для развлекательных целей. Все права на Телепузиков принадлежат их законным владельцам.</p>
            <p className="mt-1">18+ | Сайт не является официальным представительством</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App