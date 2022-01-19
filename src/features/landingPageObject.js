import { FaAddressBook, FaAmazon, FaLightbulb, FaBalanceScale, FaAddressCard, FaBitcoin, FaChessKing } from 'react-icons/fa';
import banner1 from '../assets/Other 03.svg';

// Bellow you can change the contents of the landing page
  export const landingPageObject = {
    features: [
      {
        title: 'Competitive exchange rates',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaAmazon
      },
      {
        title: 'No hidden fees',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaBalanceScale
      },
      {
        title: 'Transfers are instant',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaLightbulb
      },
      {
        title: 'Mobile notifications',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaAddressBook
      }
    ],
    showcase: [
      {
          title: 'Clean Code',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quisquam, in beatae saepe temporibus praesentium sed animi tempore rem, sit voluptates accusamus quam libero sapiente! Libero repudiandae quia fuga cum.',
          banner: banner1,
          icon: FaAddressCard
      },
      {
          title: 'Customizable',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae. A, facilis. Accusamus nesciunt labore ratione quisquam nostrum non. Sit doloremque, voluptates eum fuga asperiores ducimus impedit alias quaerat. Possimus.',
          banner: banner1,
          icon: FaBitcoin
      },
      {
          title: 'Export feature',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur eaque eos! Odio aut, quo ea minus sit deleniti placeat consectetur, sed quis, provident rerum vero qui perspiciatis laudantium dolorum.',
          banner: banner1,
          icon: FaChessKing
      }
    ],
    about: undefined
  }

  export default landingPageObject;