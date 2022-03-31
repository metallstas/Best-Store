import { useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import cls from './Footer.module.css'
import { ReactComponent as Telegram } from './telegram.svg'
import { ReactComponent as Viber } from './viber.svg'
import { ReactComponent as WA } from './wa.svg'

export const Footer = () => {
  const currentTheme = useSelector(
    (state: IState) => state.themeReducer.currentTheme
  )

  return (
    <footer
      style={{ background: currentTheme.backgroundFooter }}
      className={cls.footer}
    >
      <div className={cls.container}>
        <div className={cls.payBlock}>
          <div>
            <div
              style={{ color: currentTheme.colorTextFooter }}
              className={cls.descriptionStore}
            >
              Интернет-магазин одежды, электроники и аксессуаров мировых
              брендов. Бесплатная доставка с примеркой по всей Беларуси.
              Самовывоз из фирменных салонов сети.
            </div>
            <div className={cls.delivery}>
              <div>
                <img src='/images/delivery-footer.png' alt='delivery' />
                <p>Бесплатная доставка за 2 часа по Минску</p>
              </div>
              <div>
                <img src='/images/delivery-footer.png' alt='delivery' />
                <p>Бесплатная доставка Беларуси</p>
              </div>
            </div>
          </div>
          <div className={cls.paySystem}>
            <img src='/images/G-pay.png' alt='g-pay' />
            <img src='/images/apple-pay.png' alt='apple-pay' />
            <img src='/images/master-card.png' alt='master-card' />
            <img src='/images/visa.png' alt='visa' />
            <img src='/images/sumsung-pay.png' alt='sumsung-pay' />
          </div>
          <div>
            <div className={cls.footerInfo}>
              <div className={cls.footerPhone}>
                <img src='/images/Phone.png' alt='phone' />
                <a href='tel:+375336128264'>+375(33)612-82-64</a>
              </div>
              <div className={cls.footerSocial}>
                <a href='https://t.me' target='_blank'>
                  <Telegram />
                </a>
                <a href='https://www.viber.com' target='_blank'>
                  <Viber />
                </a>
                <a href='https://www.whatsapp.com' target='_blank'>
                  <WA />
                </a>
              </div>
              <p style={{ color: currentTheme.colorTextFooter }}>
                Время работы: пн-вс с 09:00 до 21:00, Заказы через корзину
                круглосуточно
              </p>
            </div>
          </div>
        </div>
        <div className={cls.borderBottom}></div>

        <div className={cls.footerLegal}>
          <div
            style={{ color: currentTheme.colorTextFooter }}
            className={cls.footerCopy}
          >
            © 2022 Best Store
          </div>
          <div
            className={cls.footerCopyText}
            style={{ color: currentTheme.colorTextFooter }}
          >
            ОДО «БелВиринея». УНП 190706320. 06.04.2006. Минский горисполком.
            Юр.адрес: г. Минск, ул. Немига, 5, пом. 39. Интернет-магазин fh.by
            зарегистрирован в Торговом реестре Республики Беларусь 14.11.2019
            года. Регистрационный номер 465593. Время работы Пн-Вс,
            круглосуточно. Телефоны: +375 (29) 633-2-633, +375 (17) 328-60-79.
            E-mail: fh@fh.by
          </div>
          <div
            style={{ color: currentTheme.colorTextFooter }}
            className={cls.footerDev}
          >
            Разработано StackAdvance
          </div>
        </div>
      </div>
    </footer>
  )
}
