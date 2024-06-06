import re
from django.core.exceptions import ValidationError


def validate_phone_number(value):
    pattern = re.compile(r'^(\+98|0)?9\d{9}$')
    if not pattern.match(value):
        raise ValidationError('Invalid phone number.')


def validate_national_id(value):
    if not value.isdigit() or len(value) != 10:
        raise ValidationError('Invalid Iranian national ID.')

    check_digit = int(value[-1])
    sum_digits = sum(int(digit) * (10 - idx) for idx, digit in enumerate(value[:9]))
    remainder = sum_digits % 11
    if not ((2 > remainder == check_digit) or (remainder >= 2 and check_digit == 11 - remainder)):
        raise ValidationError('Invalid national ID.')


def validate_password(password, password_repeat):
    if not password or not password_repeat:
        raise ValidationError('Password and password repetition are required.')

    if password != password_repeat:
        raise ValidationError('Passwords do not match.')

    # Define a password policy regex (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    password_policy = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')
    if not password_policy.match(password):
        raise ValidationError(
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.')
