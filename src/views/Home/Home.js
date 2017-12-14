import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import WindowEvent from 'components/WindowEvent'
import cn from 'classnames'
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
  Button,
  Divider,
} from 'semantic-ui-react'
import images from 'assets/images/card-default.jpg'
import styles from './Home.scss'

class Home extends React.Component {

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { scrollTop } = this.props
    return (
       <div className="container">
         <Segment style={{ padding: '3em 0em' }} vertical>
           <Grid container stackable verticalAlign='middle'>
             <Grid.Row>
               <Grid.Column width={8}>
                 <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                 <p style={{ fontSize: '1.33em' }}>
                   We can give your company superpowers to do things that they never thought possible. Let us delight
                   your customers and empower your needs... through pure data analytics.
                 </p>
                 <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                 <p style={{ fontSize: '1.33em' }}>
                   Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                 </p>
               </Grid.Column>
               <Grid.Column floated='right' width={6}>
                 <Image
                   bordered
                   rounded
                   size='large'
                   src={images}
                 />
               </Grid.Column>
             </Grid.Row>
             <Grid.Row>
               <Grid.Column textAlign='center'>
                 <Button size='huge'>Check Them Out</Button>
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </Segment>
         <Segment style={{ padding: '3em 0em' }} vertical>
           <Container text>
             <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
             <p style={{ fontSize: '1.33em' }}>
               Instead of focusing on content creation and hard work, we have learned how to master the art of doing
               nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
               and worth your attention.
             </p>
             <Button as='a' size='large'>Read More</Button>
             {/* <Divider
               as='h4'
               className='header'
               horizontal
               style={{ margin: '3em 0em', textTransform: 'uppercase' }}
             >
               <a href='#'>Case Studies</a>
             </Divider> */}
             <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
             <p style={{ fontSize: '1.33em' }}>
               Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
               true.
               It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
             </p>
             <Button as='a' size='large'>I'm Still Quite Interested</Button>
           </Container>
         </Segment>
       </div>
    );
  }

}

Home.propTypes = {
  hello: PropTypes.string,
  handleSayHello: PropTypes.func,
}

Home.defaultProps = {
  hello: null,
  handleSayHello: null,
}

export default WindowEvent(Home)
