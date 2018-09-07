import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ItemCard = ({ author, avatarUrl, title, subtitle, style, children }) => (
    <Card>
        <CardHeader avatar={avatarUrl} title={author} subheader={subtitle} />
        <CardContent>
            {children}
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export default ItemCard;