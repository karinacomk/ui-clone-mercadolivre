import React from 'react';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import { Container, Row, Panel, Collumn, Gallery, Section, Description } from './styles';
import tshirtImage from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Collumn>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Collumn>

        <Collumn>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
        </Collumn>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">X dias</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt quas recusandae reprehenderit minus nesciunt, non molestias omnis soluta! Sint a eos eum enim! Aut nesciunt facere soluta quis ad!
    </p>

    <br />
    <br />

    Itens inclusos: <br />
    - XPTO <br />
    <br />

    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non assumenda quia porro ipsum temporibus, fugit quas iste eius labore consequuntur repellat dolores inventore cupiditate totam, corrupti quibusdam perferendis unde vero?
  </Description>
)

export default Product;