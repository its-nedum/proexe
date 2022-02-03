export const NameRules = [
    {
      required: true,
      message: 'Please input your name',
    },
    {
        min: 2,
        message: 'Name is too short'
    },
    {
        max: 50,
        message: 'Name is too long'
    },
];

export const EmailRules = [
{
    required: true,
    message: 'Please input your email',
  },
  {
      type: 'email',
      message: 'Enter a valid email'
  }
];



