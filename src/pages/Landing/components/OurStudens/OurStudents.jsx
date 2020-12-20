import avatar from '../../../../assets/avatar.png'
import upper from '../../../../assets/upperQuotes.svg'
import lower from '../../../../assets/lowerQuotes.svg'

import "./OurStudents.css"

export default function OurStudents() {
  return (
    <section className="section-our-students">
        <div className="background-relative">
          <div className="background-absolute-2"></div>
        </div>
        <div className="div-our-students">
          <h2 className="h2-our-students">
            Что говорят о нас
            <br />
            наши ученики
          </h2>
        </div>
        <div className="background-relative">
          <div className="background-absolute-3">
            <div className="div-photo">
              <img src={avatar} alt="" style={{ borderRadius: '50%' }}/>
            </div>
            <p className="p-student">Это лучшая онлайн школа, 
              в которой я когда либо был. Лучше и дешевле просто 
              не найти, отвечаю. Присоединяйтесь, будет весело!
            </p>
            <div className="upper-q"><img src={upper} alt=""/></div>
            <div className="lower-q"><img src={lower} alt=""/></div>
          </div>
        </div>
      </section>
  )
}