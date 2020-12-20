import teacher1 from '../../../../assets/teacher1.png'
import teacher2 from '../../../../assets/teacher2.png'
import teacher3 from '../../../../assets/teacher3.png'
import teacher4 from '../../../../assets/teacher4.png'
import "./OurTeachers.css"

export default function OurTeachers() {
  return (
    <section className="section-our-teachers">
      <div className="background-teachers">
        <h1 className="h1-our-teachers">Наши учителя</h1>
        <section className="list-of-cards">
          <div className="card">
            <img src={teacher1} alt="" className="card-img"/>
            <h4 className="h4-name">Сайфуллин Нияз</h4>
            <p className="p-stack">Java, C++, C#</p>
          </div>
          <div className="card">
            <img src={teacher2} alt="" className="card-img"/>
            <h4 className="h4-name">Мирзоев Амиль</h4>
            <p className="p-stack">JavaScript, Python, VueJS</p>
          </div>
          <div className="card">
            <img src={teacher3} alt="" className="card-img"/>
            <h4 className="h4-name">Клецын Костя</h4>
            <p className="p-stack">TypeScript, Java, VueJS</p>
          </div>
          <div className="card">
            <img src={teacher4} alt="" className="card-img"/>
            <h4 className="h4-name">Матвеев Алексей</h4>
            <p className="p-stack">Ментор</p>
          </div>
        </section>
      </div>
    </section>
  )
}