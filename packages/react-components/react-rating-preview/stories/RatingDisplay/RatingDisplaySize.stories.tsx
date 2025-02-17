import * as React from 'react';
import { RatingDisplay } from '@fluentui/react-rating-preview';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const Size = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RatingDisplay value={3} size="small" />
      <RatingDisplay value={3} size="medium" />
      <RatingDisplay value={3} size="large" />
      <RatingDisplay value={3} size="extra-large" />
    </div>
  );
};

Size.parameters = {
  docs: {
    description: {
      story: "A RatingDisplay's `size` can be `small`, `medium`, `large`, or `extra-large`.",
    },
  },
};
