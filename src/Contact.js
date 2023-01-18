import twitter from './picture/twitter.png';
import facebook from './picture/facebook.png';
import telegram from './picture/telegram.png';
import instagram from './picture/instagram.png';


function Contact() {
    return(
        <div className="communicationContainer">
            <div className='contactContainer'>
                <div className='contactItem'>
                    <div className='contact'>
                        <h3>Телeфон:</h3>
                        <p>+79101001010</p>
                    </div>
                    <div className='contact'>
                        <h3>Адрес:</h3>
                        <p>г. Москва, ул. Донская, д. 8 стр. 1</p>
                    </div>
                    <div className='contact'>
                        <h3>Почта:</h3>
                        <p>meditation@mail.ru</p>
                    </div>
                    <div className="iconContainer">
                        <img src={ twitter } alt='twitter'/>
                        <img src={ facebook } alt='facebook'/>
                        <img src={ telegram } alt='telegram'/>
                        <img src={ instagram } alt='instagram'/>
                    </div>
                </div>
                <div className='message'>
                    <p>По всем волнующим вопросам вы можете связаться с нами по указанным контактам.
                    <br/>Наш отдел клиентской поддержки всегда рад помочь вам!</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;