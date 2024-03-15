import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import { useState } from "react";
function App() {
  const [role, setRole] = useState('dev');

  const [students, setStudents] = useState([  
                      {id: 1, name: "Ryomen Sukuna", email: "KingofCurses@gmail.com"},
                      {id: 2, name: "Itadori Yuji", email: "ItadoriYuji@gmail.com"},
                      {id: 3, name: "Satoru Gojo", email: "GojoSatoru@gmail.com"},
                      {id: 4, name: "Megumi Fushiguro", email: "MegumiFushiguro@gmail.com"},
                      {id: 5, name: "Yuta Okkotsu", email: "YutaOkkotsu@gmail.com"}
                    ]);

  return(
      <>
      <Header/>
      
      <div>
        {students.map((student) => {
          return(
          <Card key={student.id} name = {student.name} email={student.email}/>
          );
        })}
      </div>
      <Footer/>
      </>
    );
}

export default App