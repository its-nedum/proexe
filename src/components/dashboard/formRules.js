export const NameRules = [
    {
      required: true,
      message: 'Please input a name',
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
    message: 'Please input an email',
  },
  {
      type: 'email',
      message: 'Enter a valid email'
  }
];



