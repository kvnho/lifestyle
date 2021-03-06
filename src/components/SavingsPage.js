import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SavingsStatement from './SavingsStatement';
import WeekChart from './WeekChart';
import FutureChart from './FutureChart';
import Weekend from '@material-ui/icons/Weekend';
import CarProgress from './CarProgress';

const styles = theme => ({
	root: {
		fontFamily: "'Poppins', 'sans-serif'",
		textTransform: 'lowercase',
		margin: '0 100px'
	},
	title: {
		textAlign: 'center'
	},
	charts: {
		textAlign: 'center',
		margin: '100px 0'
	},
	logoDiv: {
		textAlign: 'center'
	},
	logo: {
		fontSize: '80px'
	},
	space: {
		height: '200px'
	}
});

class SavingsPage extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.logoDiv}>
					<Weekend className={classes.logo} />
				</div>
				<h1 className={classes.title}>Savings account</h1>
				<hr />
				<br />
				<SavingsStatement />
				<div className={classes.charts}>
					<WeekChart />
				</div>

				<div className={classes.charts}>
					<FutureChart />
				</div>
				<div>
					<CarProgress totalRounded='30.00' weeklyRounded='21.00' />
				</div>
				<div className={classes.space} />
			</div>
		);
	}
}

export default withStyles(styles)(SavingsPage);
