export default function Info() {
    return (<article style={{display:"flex",justifyContent:"center", flexDirection:"column", paddingLeft: 30, paddingRight:30 ,gap:18}}> 
    <h1>Informacion michina</h1>
    <img alt='Michis' src="https://i.pinimg.com/originals/34/5e/fe/345efe814540a8bf5881df4bf4796f2c.jpg" height={500} width={850} ></img>
    <h3>Cuidado de gatos sordos</h3>
    <div> <ul> 
      <li>
      <p>Acaraciarlos mucho</p>
      </li>
      <li>
        <p>Despertarlos despacito para evitar un michiataque</p>
      </li>
    </ul>
    </div>
  </article>)
}