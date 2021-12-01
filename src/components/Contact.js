import '../css/Contact.css';
import '../css/layout.css';
import mail from '../img/mail.png';
import insta from '../img/instaaaa.png';
const Contact = () => {
    return(
        <section>
            <div className="contact">
                <h1> Kontaktirajte nas </h1>
                <div className="brat">
                    <h2> Ђорђе Вучковић </h2>
                    <div>
                        <img src={insta} className="insta"/>
                        <a href = "https://www.instagram.com/djolex_15/"> instagram </a>
                    </div>
                    <div>
                        <img src={mail} className="mail"/>
                        <p> djokadjordje005@gmail.com </p>
                    </div>
                </div>
                <div className="brat">
                    <h2> Михајло Петковић </h2>
                    <div>
                    <img src={insta} className="insta"/>
                    <a href = "https://www.instagram.com/mihajlop05/"> instagram </a>
                    </div>
                    <div>
                    <img src={mail} className="mail"/>
                    <p> mihajlopetkovic74@gmail.com </p>
                    </div>
                </div>
                <div className="brat">
                    <h2> Стеван Ранђеловић </h2>
                    <div>
                    <img src={insta} className="insta"/>
                    <a href = "https://www.instagram.com/randjelovic.st/"> instagram </a>
                    </div>
                    <div>
                    <img src={mail} className="mail"/>
                    <p> stevanr2005@gmail.com </p>
                    </div>
                </div>
                <div className="brat">
                    <h2> Миљан Митровић </h2>
                    <div>
                    <img src={insta} className="insta"/>
                    <a href = "https://www.instagram.com/memmeii/"> instagram </a>
                    </div>
                    <div>
                    <img src={mail} className="mail"/>
                    <p> imimtrocicmi@gmail.com </p>
                    </div>
                </div>
                <div className="brat">
                    <h2> Ментор: Дејан Пејчић </h2>
                    <div>
                    <img src={mail} className="mail"/>
                    <p> dpejca@gmail.com </p>
                    </div>
                </div>
                <div>
                    <h2> Сајт школе </h2>
                    <a className="sajtskole" href = "https://www.borastankovic.edu.rs/"> Сајт школе </a>
                </div>
            </div>
        </section>
    )
}

export default Contact