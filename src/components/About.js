import '../css/About.css';
import Djole from '../img/Djole.jpg'
import Mimi from '../img/Mimi.jpg'
import Stevan from '../img/Stevan.jpg'
import Petko from '../img/Petko.jpg'

const About = () => {
    /*return(
        <>
        <div class = "mr">
            <div class = "gornjideo">
                <h2 id = "naslov">О нама</h2>
                <p id = "tekstoapp">гас</p>
            </div>
            <div class = "sinovi">
                <h2 id = "naslov1">Синови</h2>
                <div class = "clan">
                        <div class="flex-container steva">
                            <img id = "slike" src={Stevan} alt="stevan"/>
                            <h2 class = "ime">Стеван Ранђеловић</h2>
                            <p class = "onjemu">Ћао ја сам Стеван</p>
                        </div>
                        <div class="flex-container mimi">
                            <img id = "slike" src={Mimi} alt="mimi"/>
                            <h2 class = "ime">Миљан Митровић</h2>
                            <p class = "onjemu">Najjaci je i ima veliki mozak sa velikim misicima</p>
                        </div>
                        <div class="flex-container petko">
                            <img id = "slike" src={Petko} alt="mihajlo"/>
                            <h2 class = "ime">Михајло Петковић</h2>
                            <p class = "onjemu">Najjaci je i ima veliki mozak sa velikim misicima</p>
                        </div>
                        <div class="flex-container djole">
                            <img id = "slike" src={Djole} alt="djordje"/>
                            <h2 class = "ime">Ђорђе Вучковић</h2>
                            <p class = "onjemu">Почео сам да програмирам у 6. разреду основне школе. 
                            У слободно време волим да играм Fortnite. 
                            Волим да једем! Пс. Купи Шаоми брате!!!</p>
                        </div>
                </div>
            </div>
        </div>
        
        </>
    )*/
    return(
        <section>
            <h2 id="naslov1">О нама</h2>
            <div class="kartica">
            <div>
            <p class="opis">Име нашег тима јесте синови. Свако од нас је имао искуства са програмирањем претходних година
            и учествовао на такмичењу. Волимо да уживамо у животу и терамо све ка хумору. Упознали смо се у Средњој школи
            и од тада се дружимо као права браћа. Сви смо најјачи осим Ђолета . Дејан Пејчић је најјачи професор.</p>
            </div>
            </div>
            <h2 id="naslov1">Синови</h2>
            <div class="kartica">
            <img id = "slike" src={Stevan} alt="djordje"/>
                <div>
                    <p class="opis">
                        Имам искуства у техничком образовању и освојио сам прво место
                        на републичком такмичењу 2019. године. Сам учим програмирање
                        већ годину ипо. Брзо учим нове ствари и за мене је ово велики
                        изазов. Активно се бавим спортом и тренирам пливање.
                    </p>
                    <h3 className="uloga">Стеван Ранђеловић</h3>
                </div>
            </div>
            <div class="kartica">
            <img id = "slike" src={Mimi} alt="djordje"/>
                <div>
                    <p class="opis">
                    Кренуо сам да програмирам у 7.
                    разреду када сам кренуо да се занимам око игрица, веб сајтова и др.
                    Ишао сам у основну школу "Душан Радовић".Тренутно идем у гимназију Бора Станковић
                    и специјалан сам смер за информатику.У слободно време тренирам пливање и идем на часове енглеског.
                    Од језика знам C,C#,Python.Циљ ми је да постанем програмер али и да се забављам док радим оно што волим.</p>
                    <h3 className="uloga">Миљан Митровић</h3>
                </div>
            </div>
            <div class="kartica">
            <img id = "slike" src={Petko} alt="djordje"/>
                <div>
                    <p class="opis">
                    Од малена био сам заинтересован за игрице и размишљање при раду задатака.
                    ИТ смер сам изабрао првентсвено јер ми је програмирање било занимљиво, а и лако ми је ишло. Док сам био у основној школи
                    присуствовао сам разним радионицама везаним за информатику. Од језика знам C,C#,Python. Први пут сам се сусрео са програмирањем
                    у Унитију. У осталом волим да се бавим спортом и да идем у теретану.</p>
                    <h3 className="uloga">Михајло Петковић</h3>
                </div>
            </div>
            <div class="kartica">
            <img id = "slike" src={Djole} alt="djordje"/>
                <div>
                    <p class="opis">
                        Почео сам да програмирам у 6. разреду основне школе. 
                        У слободно време волим да играм Fortnite.Имам искуства у прављењу игрица у Унитију.
                        Долазим из Књажевца али идем у Средњу Школу у Нишу.Волим изазове и задатке које те терају на размишљање. 
                        Осим програмирања волим да се занимам за тренутно популарне новости, попут Крипто валута или NFT-a.
                        Волим да једем! Пс. Купи Шаоми брате!!!</p>
                    <h3 className="uloga">Ђорђе Вучковић</h3>
                </div>
            </div>
        </section>
    )
}
export default About