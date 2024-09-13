import React from "react"
import ContactsIcon from "./ContactsIcon"
import ContactsPhoto from "./ContactsPhoto"
import BtnInicio from "./BtnInicio"

export default function ContactsSection() {
    return (
        <div className="contacts-box">
            <div className="contacts-title">
                <h2>Entre em contato!!</h2>
            </div>
            <div className="guide">
                <p>Para realizar seu orçamento entre em contato através das opções abaixo e caso possua alguma
                    dúvida
                    na hora de como enviar seu orçamento, estarei disponibilizando um guia no final da pagina para
                    auxiliar. Obrigado!
                </p>
            </div>
            <ContactsIcon NameApp={'whatsapp'} Info={'(66) 996729965'} />
            <ContactsIcon NameApp={'instagram'} Info={'@Jpyoartattoo'} />
            <div className="tutorial">
                <div className="title-tutorial">
                    <h2>Orçamentos!!!</h2>
                    <hr />
                    <h3>Como mandar seus orçamentos corretamente!</h3>
                </div>
                <div className="text-tutorial">
                    <p>1. Mande o local que irá tatuar, tamanho em cm e uma referência da arte que irá fazer.</p>
                    <p>2. Caso não saiba o tamanho em cm, mande uma foto do local circulando a área que deseja que a tatuagem pegue, assim terei uma ideia da média de tamanho que deseja.</p>
                </div>
                <div className="photoContainer-tutorial">
                    <h3>Referencia abaixo</h3>
                    <ContactsPhoto num={1} />
                    <ContactsPhoto num={2} />
                    <h3>Nesse caso pode haver alteração no valor final.</h3>
                </div>
                <div className="text-tutorial">
                    <p>3. Em caso de autoral, mande o máximo de referências possíveis de como deseja que a tattoo
                        seja e bem explicado.</p>
                    <p>4. Caso esteja em dúvida em relação ao local, diga pelo menos três áreas do corpo em que você
                        pensa em fazer a tatto.</p>
                </div>
                <div className="title-tutorial">
                    <h3>Isso ajudará a ter as respostas mais rápidas e valores mais precisos em suas tattos!</h3>
                </div>
            </div>
            <BtnInicio />
        </div>
    )
}