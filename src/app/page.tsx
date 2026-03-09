'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ChatInterface from '@/components/ChatInterface'

const historicalFigures = [
  {
    id: 'harriet-tubman',
    name: 'Harriet Tubman',
    role: 'Underground Railroad Conductor',
    years: '1822-1913',
    image: '🌟',
    color: 'bg-amber-700',
    description: 'Born into slavery, she escaped and then returned to guide dozens of others to freedom.',
    firstLetter: `Dear Friend,

I was born into slavery in Maryland. I remember the hard work in the fields, the sound of the whip, and the pain of being separated from my family.

But I never lost hope.

One day, I found my courage. I ran through the dark woods, across rivers, with slavecatchers behind me. God was with me - I made it to freedom in Pennsylvania.

But my sister and her children were still in slavery. I couldn't leave them. So I went BACK - through those dangerous woods again - to lead them to freedom.

They call me "Moses" because I led my people out of slavery, just like the Bible story. I helped over 70 people find their way to freedom through the Underground Railroad.

Always believe in freedom,
Harriet`
  },
  {
    id: 'abraham-lincoln',
    name: 'Abraham Lincoln',
    role: '16th President of the United States',
    years: '1809-1865',
    image: '🎖️',
    color: 'bg-gray-800',
    description: 'The president who led the nation through the Civil War and abolished slavery.',
    firstLetter: `My Dear Young Friend,

I was born in a small log cabin in Kentucky. We didn't have much - no books, no school, no fancy things. But I loved to read. I would read by the fireplace late into the night.

I became a lawyer, then a congressman, and finally President. When I took office, the country was splitting apart. The Southern states wanted to leave and keep slavery. I knew that everyone should be free.

The war was long and hard. Thousands of soldiers died. It was the hardest thing I ever had to do.

But I knew it was right. And on January 1, 1863, I signed the Emancipation Proclamation - declaring all enslaved people in rebel states to be free.

We will rise or fall together. My friend, remember: "A house divided against itself cannot stand."

Your friend,
Abraham Lincoln`
  },
  {
    id: 'clara-barton',
    name: 'Clara Barton',
    role: 'Nurse & Founder of the Red Cross',
    years: '1821-1912',
    image: '❤️',
    color: 'bg-red-700',
    description: 'A teacher who became a nurse, she tended to soldiers on the battlefield.',
    firstLetter: `My Dear Child,

I was a very shy girl. I was so afraid of being judged that I stayed home for years! But something happened that changed my life - the war.

When I saw young men bleeding on the battlefield, my fear disappeared. I knew I had to help. I gathered bandages, medicine, and my courage - and I went to where the fighting was worst.

The soldiers called me the "Angel of the Battlefield." I didn't sleep, I didn't eat much - I just worked. I held their hands, dressed their wounds, and wrote letters home for those who couldn't.

After the war, I learned about the Red Cross in Switzerland. I brought it to America so that we would always be ready to help people in any disaster - war, floods, or hurricanes.

Never be afraid to help others, my dear. That is the greatest gift you can give.

With love,
Clara`
  },
  {
    id: 'james-longstreet',
    name: 'James Longstreet',
    role: 'Confederate General',
    years: '1821-1904',
    image: '⚔️',
    color: 'bg-blue-900',
    description: 'A Confederate general who later became an ambassador and advocated for reconciliation.',
    firstLetter: `Young Friend,

I was a soldier in the Confederate Army. I fought for the South, for my home state of Georgia. Many young men from the South believed they were defending their rights and their way of life.

I fought in many of the biggest battles - Bull Run, Antietam, Gettysburg. I saw terrible things. War is not glorious, my friend. It is pain, loss, and sorrow.

After the war, I realized something important: the cause I fought for was wrong. Slavery was a sin. The South needed to change.

I became friends with President Grant, who had been my enemy. We worked together to help the South rebuild. We must learn from our mistakes and always try to do better.

Not all battles are fought with swords. The hardest battles are the ones we fight in our own hearts.

Your friend,
James Longstreet`
  }
]

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  const [selectedFigure, setSelectedFigure] = useState(historicalFigures[0])

  const handleChatWith = (figure: typeof historicalFigures[0]) => {
    setSelectedFigure(figure)
    setShowChat(true)
  }

  return (
    <main className="min-h-screen paper-texture">
      {/* Hero Section */}
      <header className="bg-civil-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">📜</div>
          <div className="absolute bottom-10 right-10 text-9xl">🏛️</div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-civil-gold uppercase tracking-widest mb-4 font-sans">A Child's Journey Through History</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Voices of<br /><span className="text-civil-gold">the War</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 font-sans">
              A children's book told through real letters, diary entries, and speeches from people who lived through the American Civil War.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="bg-civil-gold text-civil-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
              >
                Get the Book — $4.99
              </a>
              <a 
                href="#characters" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-civil-navy transition-colors"
              >
                Meet the Characters
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-civil-navy">History Through Their Eyes</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            This isn't a textbook. It's a collection of <span className="font-bold">real letters</span> and 
            <span className="font-bold"> words</span> from people who were actually there. Children can read 
            what Harriet Tubman wrote about her journey to freedom, or what Abraham Lincoln told the nation 
            about liberty. Real history. Real voices. Truly accessible for young readers.
          </p>
        </div>
      </section>

      {/* Preview Section */}
      <section id="book" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-civil-navy">Preview the Book</h2>
              <div className="bg-civil-cream p-8 rounded-lg shadow-lg border-2 border-civil-sepia">
                <p className="text-sm text-civil-sepia uppercase tracking-widest mb-4">Sample Letter</p>
                <p className="font-serif text-lg leading-relaxed italic text-gray-700">
                  "Dear Friend, I was born into slavery in Maryland. I remember the hard work in the fields, 
                  the sound of the whip, and the pain of being separated from my family. But I never lost hope. 
                  One day, I found my courage..."
                </p>
                <p className="mt-4 font-bold text-civil-burgundy">— From Harriet Tubman's letter</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-civil-navy p-8 rounded-lg shadow-2xl inline-block transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white w-64 h-80 rounded flex items-center justify-center text-civil-sepia">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-4">📖</div>
                    <p className="font-serif text-xl">Voices of the War</p>
                    <p className="text-sm mt-2">20 Pages • Ages 6-12</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-gray-600">Digital PDF Download</p>
            </div>
          </div>
          
          {/* Purchase Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white text-xl px-12 py-5 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg">
              Buy Now — $4.99
            </button>
            <p className="mt-4 text-gray-500 text-sm">Secure payment via Gumroad</p>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-6 bg-civil-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-4 text-white text-center">Chat with History</h2>
          <p className="text-gray-300 text-center mb-12 text-lg">Choose a historical figure to chat with and learn history in a whole new way!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalFigures.map((figure, index) => (
              <motion.div
                key={figure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer hover:transform hover:scale-105 transition-all"
                onClick={() => handleChatWith(figure)}
              >
                <div className={`${figure.color} p-6 text-white text-center`}>
                  <div className="text-5xl mb-2">{figure.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-civil-navy mb-1">{figure.name}</h3>
                  <p className="text-sm text-civil-burgundy font-bold mb-2">{figure.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{figure.description}</p>
                  <span className="inline-block bg-civil-cream text-civil-sepia px-4 py-2 rounded-full text-sm font-bold">
                    Chat with {figure.name.split(' ')[0]} 💬
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-civil-navy text-center">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-serif text-xl font-bold mb-2">20 Page Book</h3>
              <p className="text-gray-600">Beautifully designed PDF with real historical letters and documents.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-serif text-xl font-bold mb-2">AI Chat Characters</h3>
              <p className="text-gray-600">Interactive conversations with the historical figures from the book.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-serif text-xl font-bold mb-2">Educational</h3>
              <p className="text-gray-600">Perfect for home schooling, classrooms, or curious young minds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-civil-sepia text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg mb-4">Voices of the War — Teaching history through primary sources.</p>
          <p className="text-gray-300 text-sm">© 2026 Civil War Stories. All rights reserved.</p>
        </div>
      </footer>

      {/* Chat Modal */}
      {showChat && (
        <ChatInterface 
          figure={selectedFigure} 
          onClose={() => setShowChat(false)} 
        />
      )}
    </main>
  )
}
