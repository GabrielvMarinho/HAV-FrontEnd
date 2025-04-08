import { Customer } from '../Customer/Customer';
import { Adm } from '../Adm/Adm';
import { Realtor } from '../Realtor/Realtor';
import { Editor } from '../Editor/Editor';

export type User = Adm | Realtor | Customer | Editor;
export type UserType = User['type'];

export function isAdmin(user: User): user is Adm {
    return user.type === 'admin';
}

export function isRealtor(user: User): user is Realtor {
    return user.type === 'realtor';
}

export function isCustomer(user: User): user is Customer {
    return user.type === 'customer';
}

export function isEditor(user: User): user is Editor {
    return user.type === 'editor';
}