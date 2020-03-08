import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isObject from 'lodash/isObject';
import { TextField } from '@material-ui/core';
import { themeSpacing } from 'styles/styled-components';
import { useDispatch } from 'react-redux';
import { detailDataChangedAction } from 'containers/DashboardPage/actions';

const StyledDetailView = styled.div`
  height: 100%;
`;

const detailData = {
  title: 'EmployeesView',
  name: '/list/Employee',
  type: null,
  parentType: 'Workspace',
  parentId: '5e4a8a644b62b57016041a23',
  layout: null,
  schema: null,
  scope: 'user',
  fields: [
    {
      pkid: 'EmployeesView_Employee_form',
      html: {
        caption: 'formTiltlr',
        span: 10,
        attr: '',
        column: 1,
      },
      object: 'Employee',
      label: 'formTiltlr',
      name: 'form',
      type: 'form',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: 'true',
      readonly: false,
      options: {
        data: '{"maxWidth":600, "maxHeight":470}',
        maxWidth: 600,
        maxHeight: 470,
      },
      optionsString: '{"maxWidth":600, "maxHeight":470}',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27900106,
      id_key: '158194340227900',
    },
    {
      pkid: 'EmployeesView_Employee_name',
      html: {
        caption: 'Nume',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Nume',
      name: 'name',
      type: 'text',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: 'true',
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27901106,
      id_key: '158194340227901',
    },
    {
      pkid: 'EmployeesView_Employee_lastName',
      html: {
        caption: 'Prenume',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Prenume',
      name: 'lastName',
      type: 'text',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: 'true',
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27902106,
      id_key: '158194340227902',
    },
    {
      pkid: 'EmployeesView_Employee_phone',
      html: {
        caption: 'Mobil',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Mobil',
      name: 'phone',
      type: 'text',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: false,
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27903106,
      id_key: '158194340227903',
    },
    {
      pkid: 'EmployeesView_Employee_email',
      html: {
        caption: 'Email',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Email',
      name: 'email',
      type: 'text',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: 'true',
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27904106,
      id_key: '158194340227904',
    },
    {
      pkid: 'EmployeesView_Employee_address',
      html: {
        caption: 'Adres\u0103',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Adres\u0103',
      name: 'address',
      type: 'textarea',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: false,
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27905106,
      id_key: '158194340227905',
    },
    {
      pkid: 'EmployeesView_Employee_identitycard',
      html: {
        caption: 'Carte de indentitate',
        span: 10,
        attr: "style='width: 300px; height: 26px'",
        column: 1,
      },
      object: 'Employee',
      label: 'Carte de indentitate',
      name: 'identitycard',
      type: 'text',
      typeReference: '',
      preloadPath: '',
      actionExecution: '',
      required: false,
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27906106,
      id_key: '158194340227906',
    },
    {
      pkid: 'EmployeesView_Employee_save',
      html: {
        caption: 'Salveaz\u0103',
        span: 10,
        attr: '',
        column: 1,
      },
      object: 'Employee',
      label: 'Salveaz\u0103',
      name: 'save',
      type: 'button',
      typeReference: '',
      preloadPath: '',
      actionExecution: 'saveObject',
      required: false,
      readonly: false,
      options: null,
      optionsString: '',
      objectReferenceType: null,
      actionResponse: '',
      method: '',
      group: '',
      searchable: false,
      id: 27907106,
      id_key: '158194340227907',
    },
  ],
  links: [],
  menus: [
    {
      $ref: 'menus',
      $id: 'EmployeesViewMenu1',
    },
    {
      $ref: 'menus',
      $id: 'EmployeesViewMenu1',
    },
  ],
  components: [
    {
      pkid: 'EmployeesView_grid',
      name: 'grid',
      type: null,
      focus: null,
      references: [],
      parameters: [],
      contextmenus: [
        {
          pkid: 'EmployeesView_grid_add_employee_Adaug\u0103',
          name: 'add_employee',
          actionExecution: '',
          link: 'Adaug\u0103',
          multiselect: 'false',
          icon: null,
          viewId: null,
          parentType: 'Workspace',
          objectType: 'Employee',
          method: 'add',
          serviceName: null,
          serviceMethod: null,
          type: 'list',
          actionResponse: null,
          template: null,
          scope: null,
          params: null,
          id: 27910106,
          id_key: '158194340227910',
        },
        {
          pkid: 'EmployeesView_grid_del_employee_Sterge',
          name: 'del_employee',
          actionExecution: '',
          link: 'Sterge',
          multiselect: 'false',
          icon: null,
          viewId: null,
          parentType: 'Workspace',
          objectType: 'Employee',
          method: 'delete',
          serviceName: null,
          serviceMethod: null,
          type: 'list',
          actionResponse: null,
          template: null,
          scope: null,
          params: null,
          id: 27911106,
          id_key: '158194340227911',
        },
        {
          pkid: 'EmployeesView_grid_activateemployee_Activeaza utilizator',
          name: 'activateemployee',
          actionExecution: 'method',
          link: 'Activeaza utilizator',
          multiselect: 'false',
          icon: null,
          viewId: null,
          parentType: 'Workspace',
          objectType: 'Employee',
          method: 'activate();',
          serviceName: '',
          serviceMethod: '',
          type: null,
          actionResponse: 'refreshAll();',
          template: '',
          scope: 'admin',
          params: null,
          id: 27912106,
          id_key: '158194340227912',
        },
        {
          pkid: 'EmployeesView_grid_inactivateemployee_Dezactiveaza utilizator',
          name: 'inactivateemployee',
          actionExecution: 'method',
          link: 'Dezactiveaza utilizator',
          multiselect: 'false',
          icon: null,
          viewId: null,
          parentType: 'Workspace',
          objectType: 'Employee',
          method: 'deactivate();',
          serviceName: '',
          serviceMethod: '',
          type: null,
          actionResponse: 'refreshAll();',
          template: '',
          scope: 'admin',
          params: null,
          id: 27913106,
          id_key: '158194340227913',
        },
      ],
      id: 27908106,
      id_key: '158194340227908',
    },
  ],
  id: 27899106,
  id_key: '158194340227899',
};

const StyledTextField = styled(TextField)`
  margin: ${themeSpacing(1)}px;
`;

const DetailView = () => {
  const [formData, setFormData] = useState(detailData);
  const dispatch = useDispatch();

  console.log(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(detailDataChangedAction(formData));
  }, [formData]);

  return (
    <StyledDetailView>
      <form noValidate autoComplete="off">
        {Object.entries(formData).map(([key, value]) => {
          if (isObject(value) || Array.isArray(value)) return null;
          return (
            <StyledTextField
              fullWidth
              key={key}
              id={key}
              label={key}
              value={value || ''}
              onChange={handleChange}
            />
          );
        })}
      </form>
    </StyledDetailView>
  );
};
export default DetailView;
